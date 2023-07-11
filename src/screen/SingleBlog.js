import React from 'react';
import CommentIcon from '@mui/icons-material/Comment';
const BlogContainer = ({darkmode}) => {
    const styles = {
        container: {
          width: '95%',
          backgroundColor: darkmode?"black":'#f2f2f2',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom:10,
          
        },
        image: {
          width: '100%',
          height: 'auto',
          marginBottom: '10px',
          borderRadius: '4px',
        },
        heading: {
          fontFamily: 'Arial, sans-serif',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px',
        },
        description: {
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.5',
        },
      };
      
  return (
    <div style={styles.container}>
      <img
        src={require("../image.jpg")}
        alt="Example Blog"
        style={styles.image}
      />
      <h2 style={styles.heading}>Example Heading</h2>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
        ultrices augue, at euismod metus pulvinar ut. Donec aliquet ex id justo
        faucibus, non posuere lectus feugiat. Vivamus quis mauris ut erat
        efficitur semper. Ut accumsan feugiat ligula ac sollicitudin.
      </p>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}><p>Add a comments</p><CommentIcon  style={{color:darkmode?"white":"black",margin:7,cursor:"pointer"}}/></div>
    </div>
  );
};


export default BlogContainer;
