import React, { useEffect, useState } from 'react';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API calls with mock data for demo
  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React hooks', completed: false },
        { id: 2, title: 'Build task manager', completed: true },
        { id: 3, title: 'Deploy to production', completed: false }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const addTask = () => {
    if (!title.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setTitle('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: '2rem 1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    container: {
      maxWidth: '672px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1rem',
      margin: '0 0 1rem 0'
    },
    subtitle: {
      color: '#d1d5db',
      fontSize: '1.125rem',
      marginBottom: '1rem'
    },
    progressBadge: {
      display: 'inline-block',
      backgroundColor: '#2563eb',
      borderRadius: '50px',
      padding: '0.5rem 1.5rem',
      color: '#ffffff',
      fontWeight: '500',
      fontSize: '0.875rem'
    },
    formContainer: {
      backgroundColor: '#1f2937',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid #374151'
    },
    inputGroup: {
      display: 'flex',
      gap: '0.75rem'
    },
    input: {
      flex: '1',
      backgroundColor: '#374151',
      border: '1px solid #4b5563',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.2s ease'
    },
    inputFocus: {
      ring: '2px solid #3b82f6',
      borderColor: 'transparent'
    },
    addButton: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    addButtonHover: {
      backgroundColor: '#1d4ed8'
    },
    addButtonDisabled: {
      backgroundColor: '#4b5563',
      cursor: 'not-allowed'
    },
    tasksList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 0'
    },
    emptyTitle: {
      color: '#9ca3af',
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    },
    emptySubtitle: {
      color: '#6b7280'
    },
    taskItem: {
      backgroundColor: '#1f2937',
      borderRadius: '0.75rem',
      padding: '1.25rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #374151',
      transition: 'all 0.2s ease'
    },
    taskItemHover: {
      backgroundColor: '#374151',
      borderColor: '#4b5563'
    },
    taskContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    toggleButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.25rem',
      transition: 'color 0.2s ease',
      flexShrink: 0
    },
    taskText: {
      flex: '1',
      fontSize: '1.125rem',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    taskTextCompleted: {
      color: '#6b7280',
      textDecoration: 'line-through'
    },
    taskTextActive: {
      color: '#ffffff'
    },
    deleteButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      color: '#ef4444',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease',
      opacity: 0,
      flexShrink: 0
    },
    deleteButtonVisible: {
      opacity: 1
    },
    deleteButtonHover: {
      color: '#dc2626',
      backgroundColor: 'rgba(185, 28, 28, 0.1)'
    },
    footer: {
      textAlign: 'center',
      marginTop: '3rem',
      color: '#6b7280',
      fontSize: '0.875rem'
    },
    loading: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loadingContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#ffffff'
    },
    spinner: {
      width: '2rem',
      height: '2rem',
      border: '2px solid transparent',
      borderTop: '2px solid #3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }
  };

  if (isLoading) {
    return (
      <div style={styles.loading}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <span style={{ fontSize: '1.125rem' }}>Loading tasks...</span>
        </div>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            ✨ Task Manager
          </h1>
          <p style={styles.subtitle}>
            Stay organized and productive
          </p>
          {totalCount > 0 && (
            <div style={styles.progressBadge}>
              {completedCount} of {totalCount} completed
            </div>
          )}
        </div>

        {/* Add Task Form */}
        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              style={styles.input}
              onFocus={e => {
                e.target.style.boxShadow = '0 0 0 2px #3b82f6';
                e.target.style.borderColor = 'transparent';
              }}
              onBlur={e => {
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = '#4b5563';
              }}
            />
            <button
              onClick={addTask}
              disabled={!title.trim()}
              style={{
                ...styles.addButton,
                ...(title.trim() ? {} : styles.addButtonDisabled)
              }}
              onMouseEnter={e => {
                if (title.trim()) {
                  e.target.style.backgroundColor = '#1d4ed8';
                }
              }}
              onMouseLeave={e => {
                if (title.trim()) {
                  e.target.style.backgroundColor = '#2563eb';
                }
              }}
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div style={styles.tasksList}>
          {tasks.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyTitle}>No tasks yet</div>
              <div style={styles.emptySubtitle}>Add your first task to get started!</div>
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                style={styles.taskItem}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#374151';
                  e.currentTarget.style.borderColor = '#4b5563';
                  const deleteBtn = e.currentTarget.querySelector('.delete-btn');
                  if (deleteBtn) deleteBtn.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.borderColor = '#374151';
                  const deleteBtn = e.currentTarget.querySelector('.delete-btn');
                  if (deleteBtn) deleteBtn.style.opacity = '0';
                }}
              >
                <div style={styles.taskContent}>
                  <button
                    onClick={() => toggleTask(task.id)}
                    style={styles.toggleButton}
                  >
                    {task.completed ? (
                      <CheckCircle2 size={28} color="#22c55e" />
                    ) : (
                      <Circle size={28} color="#6b7280" />
                    )}
                  </button>
                  
                  <span
                    style={{
                      ...styles.taskText,
                      ...(task.completed ? styles.taskTextCompleted : styles.taskTextActive)
                    }}
                  >
                    {task.title}
                  </span>
                  
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                    style={styles.deleteButton}
                    onMouseEnter={e => {
                      e.target.style.color = '#dc2626';
                      e.target.style.backgroundColor = 'rgba(185, 28, 28, 0.1)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = '#ef4444';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {tasks.length > 0 && (
          <div style={styles.footer}>
            💡 Click the circle to mark tasks complete
          </div>
        )}
      </div>

      <style>
        {`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          input::placeholder {
            color: #9ca3af;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default App;