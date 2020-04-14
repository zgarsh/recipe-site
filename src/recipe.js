import React from 'react';
// import styled from 'styled-components';
import Step from './steps.js'
import Heading from './heading.js'


class Recipe extends React.Component{
    render(){
        let recipe = this.props.recipe

        return(
            <div>
                <Heading 
                    title={recipe.name}
                />
                <Heading 
                    title={recipe.emojigredients}
                />
                {recipe.steps.map( (step, index) => (
                    <Step 
                        key={index}
                        emoji={step.emoji}
                        instructions = {step.instructions}
                    />
                ))}
            </div>
        )
    }
  }
  
  export default Recipe;