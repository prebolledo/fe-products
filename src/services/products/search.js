const search = (text) => {
  const url = process.env.REACT_APP_MS_HOST+'/?search={text}';
  const ms = url.replace('{text}', text);
  return {
      suscribe: (setProducts, setError) => {
        fetch(ms,{
          method: 'GET',
          headers:{         
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => {
            response.OK ? 
            setProducts(response.data) : 
            setError(new Error(response.error.message));        
        })
        .catch(e => setError(e));
      }
  }
};

export default search;