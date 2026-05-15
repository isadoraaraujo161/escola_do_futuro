from flask import Flask
import sqlite3

app = Flask(__name__)
@app.route('/jogosDaIsa')
def inicio():
    conexao = sqlite3.connect('jogos.db')

    cursor = conexao.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS jogos(
            nome TEXT
            categoria TEXT
    )''')

    cursor.execute('''
        INSERT INTO jogos VALUES('Valorant','FPS')
    ''')
    
    cursor.execute('''
    CREATE TABLE jogosdaisa(
        nome TEXT
        abates INTERGER
    )
                   ''')
    
    cursor.exercute('''
        *INSERT INTO jogosdaisa VALUES('Detonador', 5)
    ''')
    cursor.exercute('''
        *INSERTE INTO jogosdaisa VALUES('Devastador', 9)
    ''')
    cursor.executer ('''
        'SELECT * FROM jogosdaisa'
    ''')


    dados = cursor.fetchall()
    conexao.close()
    return str(dados)
app.run(debug=True)
