document.getElementById('noteForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Obter o valor da nota do campo de entrada
    const noteText = document.getElementById('noteInput').value;
  
    // Verificar se a nota não está vazia
    if (noteText.trim() !== '') {
      // Criar elemento de lista para a nota
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = noteText;
  
      // Adicionar nota à lista
      document.getElementById('noteList').appendChild(listItem);
  
      // Limpar o campo de entrada
      document.getElementById('noteInput').value = '';
    }
  });
  