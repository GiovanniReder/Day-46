import Card from 'react-bootstrap/Card';



function BodyOnlyExample() {

    
       
    componentDidMount() {
        this.fetchComments();
      }
    
      fetchComments = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/0786966246", {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOTBlZTI4MzJlODAwMTk4NzMwYTYiLCJpYXQiOjE3MTQzOTMzMjcsImV4cCI6MTcxNTYwMjkyN30.mAQXI37ix3IyLNGK6GVS_HqnGvBn2pN7KfIQw2yLaZk`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("error");
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.error("Error fetching comments:", error));
      };
    
        
      
      
       
    
    

  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;