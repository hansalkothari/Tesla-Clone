import React from 'react';
import styled from 'styled-components'
import Section from './Section';
export default function Home() {
  return <div>
    <Container>
      <Section title = "Model S" 
              desc = "order online with touchless delivery" 
              backgroundImg = "model-s.jpg"        
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Exitsting Inventory"
      />
    <Section title = "Model X" 
              desc = "order online with touchless delivery" 
              backgroundImg = "model-x.jpg"        
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Exitsting Inventory"
      />
    <Section title = "Model 3" 
              desc = "order online with touchless delivery" 
              backgroundImg = "model-3.jpg"        
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Exitsting Inventory"
      />
      <Section title = "Model Y" 
              desc = "order online with touchless delivery" 
              backgroundImg = "model-y.jpg"        
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Exitsting Inventory"
      />      
      <Section title = "Lowest Cose Solar Panels in India" 
              desc = "Money-Back guarantee" 
              backgroundImg = "solar-panel.jpg"        
              leftBtnTxt = "Order Now"
              rightBtnTxt = "Learn More"
      />
      <Section title = "Solar for New roof" 
              desc = "Solar Roof" 
              backgroundImg = "solar-roof.jpg"        
              leftBtnTxt = "Order Now"
              rightBtnTxt = "Learn More"
      />

      <Section title = "Accessories" 
              desc = "" 
              backgroundImg = "accessories.jpg"        
              leftBtnTxt = "Shop Now"
              
      />
      
    </Container>
  </div>;
}

const Container = styled.div`
    height: 100
    
`