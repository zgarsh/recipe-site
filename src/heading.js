import React from 'react';
import styled from 'styled-components';


const HeadingStyle = styled.div`
  font-size: 30px;
  margin: 40px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

class Heading extends React.Component{
  render(){
    return(
        <HeadingStyle>
          <div>
              {this.props.title}
          </div>
        </HeadingStyle>
  );
  }
}

export default Heading;