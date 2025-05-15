import { Header } from "@components/header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
