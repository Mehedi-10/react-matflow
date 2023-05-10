// import React, { useCallback } from 'react';
// import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
//
// import 'reactflow/dist/style.css';
//
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
//
// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//
//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
//
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       />
//     </div>
//   );
// }


import React, {useState} from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}


            )
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="App">
            <h1>Send Request to Django API</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Send Request</button>
            </form>
            {message && <p>Response: {message}</p>}
        </div>
    );
}

export default App;
