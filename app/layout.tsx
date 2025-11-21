
import { Outlet } from "react-router";
import { AppShell, Container, ScrollArea } from "@mantine/core";
import { HeaderMenu } from "./components/HeaderMenu";



export default function AppLayout(){


     return (
    <AppShell 
    
   
    header={{ height: 48 }}
    styles={{
        
        footer: {
          position: 'relative', // Change de absolute à relative
          backgroundColor: 'var(--mantine-color-body)',
          borderTop: '1px solid var(--mantine-color-gray-3)',
          padding: 'var(--mantine-spacing-md)',
        },
      }}
    
    >
      <AppShell.Header>
        <HeaderMenu></HeaderMenu>
      </AppShell.Header>
       

        <AppShell.Main> 
           <Container size="md">
              <Outlet />
           </Container>
        </AppShell.Main>

        <AppShell.Footer >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus quam cumque ut voluptas! Tempora obcaecati laborum pariatur optio ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus quam cumque ut voluptas! Tempora obcaecati laborum pariatur optio ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus quam cumque ut voluptas! Tempora obcaecati laborum pariatur optio ducimus.
        </AppShell.Footer>

    </AppShell>
  );


}