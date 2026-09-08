from flask import Flask, jsonify
from datetime import datetime
<% if (database) { %>from config.db import init_db<% } %>

app = Flask(__name__)

<% if (database) { %>
init_db()
<% } %>

@app.route('/')
def index():
    return jsonify({"message": "Welcome to <%= projectName %> API"})

@app.route('/api/health')
def health():
    return jsonify({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
