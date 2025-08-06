from flask import Blueprint, request, jsonify
from models import db, Task, Comment

api = Blueprint('api', __name__)

# Create comment
@api.route('/tasks/<int:task_id>/comments', methods=['POST'])
def add_comment(task_id):
    text = request.json.get('text')
    comment = Comment(text=text, task_id=task_id)
    db.session.add(comment)
    db.session.commit()
    return jsonify({'id': comment.id, 'text': comment.text})

# Edit comment
@api.route('/comments/<int:comment_id>', methods=['PUT'])
def edit_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    comment.text = request.json.get('text')
    db.session.commit()
    return jsonify({'id': comment.id, 'text': comment.text})

# Delete comment
@api.route('/comments/<int:comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': 'Comment deleted'})

# Add, get, delete tasks
@api.route('/tasks', methods=['POST'])
def add_task():
    title = request.json.get('title')
    task = Task(title=title)
    db.session.add(task)
    db.session.commit()
    return jsonify({'id': task.id, 'title': task.title})

@api.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{'id': t.id, 'title': t.title} for t in tasks])

@api.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted'})
