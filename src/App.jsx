import { useState } from 'react';
import './App.css'; // Opcional: para seus estilos

function App() {
  // 2. Criação dos estados (States)
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState('');

  // 3. Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (textoInput.trim() === '') return; // Evita adicionar item vazio

    setTarefas([...tarefas, textoInput]); // Copia as antigas e adiciona a nova
    setTextoInput(''); // Limpa o campo de texto
  };

  // 5. Função para remover uma tarefa da lista
  const removerTarefa = (indexParaRemover) => {
    const listaFiltrada = tarefas.filter((_, index) => index !== indexParaRemover);
    setTarefas(listaFiltrada);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minha Lista de Tarefas</h1>

      {/* Campo de entrada e botão de adicionar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={adicionarTarefa} style={{ padding: '8px 12px' }}>
          Adicionar
        </button>
      </div>

      {/* 4. Renderização da lista usando o .map() */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '15px' }}>{tarefa}</span>
            
            {/* Botão de remoção acoplado a cada item */}
            <button 
              onClick={() => removerTarefa(index)}
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
