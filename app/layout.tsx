
import { Outlet } from "react-router";
import { AppShell, Container, ScrollArea } from "@mantine/core";
import { HeaderMenu } from "./components/HeaderMenu";
import { FooterLinks } from "./components/FooterLinks";



export default function AppLayout(){


     return (
    <AppShell 
    
   
    header={{ height: 48 }}
    styles={{
        
        footer: {
          position: 'relative', // Change de absolute à relative
          backgroundColor: 'var(--mantine-color-body)',
          borderTop: '1px solid var(--mantine-color-gray-3)',
         
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

        <AppShell.Footer>
            <FooterLinks></FooterLinks>
        </AppShell.Footer>

    </AppShell>
  );


}