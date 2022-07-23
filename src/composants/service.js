function getApi(){
  const getPersonne = () => {
      return fetch("http://localhost:8000/api/",{
          type: "GET",
      }).then((res) => res.json());
  };
  return {
      getPersonne,
  };
}
export default getApi();