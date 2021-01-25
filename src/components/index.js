import React from 'react'
import {Container, Wrapper, Row, Column, Link, Title} from './footer'



export default function Footer({children, ... restProps}){
  return <Container> {...restProps} {children} </Container>
}

Footer.Wrapper = FooterWrapper({children, ...restProps}){
 return <Wrapper {...restProps}> {children}</Wrapper>
}

 Footer.Row = FooterRow({children, ...restProps}){
  return <Row {...restProps}> {children}</Row>
 }

 Footer.Column = FooterColumn({children,...restProps}){
  return <Column {...restProps}> {children}</Column>
 }

 Footer.Link = FooterLink({children,...restProps}){
  return <Link {...restProps}>{children}</Link>
 }

 Footer.Title = FooterTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
 }
