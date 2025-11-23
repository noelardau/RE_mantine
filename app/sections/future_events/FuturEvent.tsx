import { Container, Title } from "@mantine/core";
import {CardsCarousel} from "./components/CardsCarousel";
import { useTranslation } from "~/hooks/useTranslation";
import type { evenement } from "./interfaces/Evenement";
import classes from "../../styles/main.module.css"


export function FuturEvent({events}:{events:evenement[]}) {

    const {t} = useTranslation();
 
    return <>
        <Title order={3} ta={"center"} className="titleSection">{t("futur-event")}</Title>
    
        <CardsCarousel events={events}></CardsCarousel>
    
    </>;
}