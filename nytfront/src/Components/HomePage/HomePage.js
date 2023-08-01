import Library from "../../Constants/Library.jpg"
import { Container } from "@mui/material"
export default function HomePage() {
    return (
        <div>
        <header style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Welcome to your book review repository!</header>
        <Container maxWidth="lg">


     <img src={Library}   />
      </Container>
        </div>
    )
}