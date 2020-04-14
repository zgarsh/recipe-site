import React from 'react';
import styled from 'styled-components';



const StepStyle = styled.div`
  font-size: 24px;
  margin: 20px;
  /* background: lightcyan; */
  display: flex;
`;

class Step extends React.Component{
  render(){
    return(
        <StepStyle>
            <div>
                <div style={{
                        marginRight: 14,
                        marginTop: 10,
                        float: "left",
                        display: "inline",
                        // background: "pink",
                        height: "100%",
                        verticalAlign: "middle",
                        textAlign: "center",
                        width: 30
                    }}>
                    {this.props.emoji}
                </div>
                <div 
                    style={{
                        display: "inline",
                        margin: 10,
                        marginLeft: 0,
                        // background: "lightblue",
                        fontSize: 18
                    }}>
                    {this.props.instructions}
                </div>
            </div>
        </StepStyle>
  );
  }
}

export default Step;