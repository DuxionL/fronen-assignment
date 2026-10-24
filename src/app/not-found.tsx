import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";

export default function NotFound() {
  return (
    <Container>
      <PageIntro title="Page not found" description="dk how it got messed up" />
      <Button href="/">Back</Button>
    </Container>
  );
}
