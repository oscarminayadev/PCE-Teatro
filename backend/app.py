from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import uuid

app = Flask(__name__)
CORS(app)

# =========================
# CONEXIÓN MYSQL
# =========================
def obtener_conexion():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="09897878",
        database="pce_teatro"
    )

# =========================
# RUTA PRINCIPAL
# =========================
@app.route('/', methods=['GET'])
def inicio():
    return jsonify({
        "mensaje": "Servidor Flask Teatro funcionando correctamente"
    })

# =====================================================
# ================== USUARIOS =========================
# =====================================================

# REGISTRO
@app.route('/api/register', methods=['POST'])
def register():

    try:
        datos = request.json

        nombre = datos['nombre']
        correo = datos['correo']
        contrasena = datos['contrasena']

        conexion = obtener_conexion()
        cursor = conexion.cursor()

        query = """
        INSERT INTO usuarios(nombre, correo, contrasena)
        VALUES(%s,%s,%s)
        """

        cursor.execute(query, (
            nombre,
            correo,
            contrasena
        ))

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({
            "mensaje": "Usuario registrado correctamente"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# LOGIN
@app.route('/api/login', methods=['POST'])
def login():

    try:
        datos = request.json

        correo = datos['correo']
        contrasena = datos['contrasena']

        conexion = obtener_conexion()
        cursor = conexion.cursor(dictionary=True)

        query = """
        SELECT * FROM usuarios
        WHERE correo = %s
        AND contrasena = %s
        """

        cursor.execute(query, (
            correo,
            contrasena
        ))

        usuario = cursor.fetchone()

        cursor.close()
        conexion.close()

        if usuario:
            return jsonify({
                "mensaje": "Login correcto",
                "usuario": usuario
            })

        return jsonify({
            "error": "Credenciales incorrectas"
        }), 401

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== EVENTOS ==========================
# =====================================================

# OBTENER EVENTOS
@app.route('/api/eventos', methods=['GET'])
def obtener_eventos():

    try:
        conexion = obtener_conexion()
        cursor = conexion.cursor(dictionary=True)

        query = """
        SELECT 
            eventos.id,
            eventos.titulo,
            eventos.descripcion,
            eventos.fecha,
            eventos.hora,
            eventos.precio_base,
            salas.nombre_sala
        FROM eventos
        LEFT JOIN salas ON eventos.sala_id = salas.id
        """

        cursor.execute(query)

        eventos = cursor.fetchall()

        # CORRECCIÓN DEL ERROR timedelta
        for evento in eventos:

            if evento['fecha']:
                evento['fecha'] = str(evento['fecha'])

            if evento['hora']:
                evento['hora'] = str(evento['hora'])

        cursor.close()
        conexion.close()

        return jsonify(eventos)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# CREAR EVENTO
@app.route('/api/eventos', methods=['POST'])
def crear_evento():

    try:
        datos = request.json

        conexion = obtener_conexion()
        cursor = conexion.cursor()

        query = """
        INSERT INTO eventos
        (
            titulo,
            descripcion,
            fecha,
            hora,
            precio_base,
            sala_id
        )
        VALUES (%s,%s,%s,%s,%s,%s)
        """

        valores = (
            datos['titulo'],
            datos['descripcion'],
            datos['fecha'],
            datos['hora'],
            datos['precio_base'],
            datos['sala_id']
        )

        cursor.execute(query, valores)

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({
            "mensaje": "Evento creado correctamente"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== BOLETAS ==========================
# =====================================================

# COMPRAR BOLETA
@app.route('/api/boletas', methods=['POST'])
def comprar_boleta():

    try:
        datos = request.json

        usuario_id = datos['usuario_id']
        evento_id = datos['evento_id']

        codigo_qr = str(uuid.uuid4())

        conexion = obtener_conexion()
        cursor = conexion.cursor()

        query = """
        INSERT INTO boletas
        (
            usuario_id,
            evento_id,
            codigo_qr
        )
        VALUES (%s,%s,%s)
        """

        cursor.execute(query, (
            usuario_id,
            evento_id,
            codigo_qr
        ))

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({
            "mensaje": "Boleta comprada",
            "codigo_qr": codigo_qr
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# OBTENER BOLETAS
@app.route('/api/boletas', methods=['GET'])
def obtener_boletas():

    try:
        conexion = obtener_conexion()
        cursor = conexion.cursor(dictionary=True)

        query = """
        SELECT * FROM boletas
        """

        cursor.execute(query)

        boletas = cursor.fetchall()

        cursor.close()
        conexion.close()

        return jsonify(boletas)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== PAGOS ============================
# =====================================================

@app.route('/api/pagos', methods=['POST'])
def crear_pago():

    try:
        datos = request.json

        conexion = obtener_conexion()
        cursor = conexion.cursor()

        query = """
        INSERT INTO pagos
        (
            usuario_id,
            monto,
            metodo_pago,
            estado
        )
        VALUES (%s,%s,%s,%s)
        """

        cursor.execute(query, (
            datos['usuario_id'],
            datos['monto'],
            datos['metodo_pago'],
            'completado'
        ))

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({
            "mensaje": "Pago realizado"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== EMPLEADOS ========================
# =====================================================

@app.route('/api/empleados', methods=['GET'])
def obtener_empleados():

    try:
        conexion = obtener_conexion()
        cursor = conexion.cursor(dictionary=True)

        cursor.execute("SELECT * FROM empleados")

        empleados = cursor.fetchall()

        cursor.close()
        conexion.close()

        return jsonify(empleados)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== RESERVAS =========================
# =====================================================

@app.route('/api/reservas', methods=['POST'])
def crear_reserva():

    try:
        datos = request.json

        conexion = obtener_conexion()
        cursor = conexion.cursor()

        query = """
        INSERT INTO reservas_salas
        (
            sala_id,
            usuario_id,
            motivo,
            fecha,
            hora_inicio,
            hora_fin
        )
        VALUES (%s,%s,%s,%s,%s,%s)
        """

        cursor.execute(query, (
            datos['sala_id'],
            datos['usuario_id'],
            datos['motivo'],
            datos['fecha'],
            datos['hora_inicio'],
            datos['hora_fin']
        ))

        conexion.commit()

        cursor.close()
        conexion.close()

        return jsonify({
            "mensaje": "Reserva creada"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# ================== REPORTES =========================
# =====================================================

@app.route('/api/reportes/ventas', methods=['GET'])
def reporte_ventas():

    try:
        conexion = obtener_conexion()
        cursor = conexion.cursor(dictionary=True)

        query = """
        SELECT COUNT(*) AS total_boletas
        FROM boletas
        """

        cursor.execute(query)

        reporte = cursor.fetchone()

        cursor.close()
        conexion.close()

        return jsonify(reporte)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# =====================================================
# INICIAR SERVIDOR
# =====================================================

if __name__ == '__main__':
    app.run(debug=True)