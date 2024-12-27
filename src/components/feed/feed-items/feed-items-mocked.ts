import { FeedItemDto } from "@/types/dto";
import { FeedItemType } from "@/types/enums";

export const feedItemsMocked: FeedItemDto[] = [
  {
    user: "Zelena Apoteka Clover",
    date: "12/07/2024",
    category: "Job offering",
    email: "stefracic@gmail.com",
    body:
      "<p>🍀 Zelena apoteka Clover zapošljava! 🍀</p>" +
      "<p>Ukoliko te inspirišu prirodni lekovi i održive prakse, ovo je prava prilika za tebe. Pridruži nam se i postani deo tima koji se zalaže za zdravlje kroz prirodu. 🌿</p>" +
      "<p>Otvorene pozicije:</p>" +
      "<p>- Farmaceut specijalizovan za biljne preparate</p>" +
      "<p>- Stručnjak za fitoterapiju - Konsultant za prirodne proizvode</p>" +
      "<p>✅ Ako deliš našu strast za zdravim životom, prijavi se već danas!</p>" +
      "<p>📧 Kontakt: posao@cloverapoteka.rs</p>" +
      "<p>🔗 Više informacija i prijava</p>",
    image:
      "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: FeedItemType.Company,
  },
  {
    user: "John Doe",
    date: "12/05/2024",
    category: "Looking for a job",
    email: "stefracic@gmail.com",
    body:
      "<p>👋 Hi everyone,</p>" +
      "<p>I am looking for a job as a junior front-end developer. I have experience with React, Next.js, and TypeScript. I am open to new opportunities and challenges. If you have a job offer for me, please contact me at something@mail.com" +
      "<p>Thank you!</p>",
    image: "",
    type: FeedItemType.Individual,
  },
  {
    user: "Jane Smith",
    date: "12/10/2024",
    category: "Event",
    email: "stefracic@gmail.com",
    body:
      "<p>🎉 Join us for a community meetup!</p>" +
      "<p>We are hosting a meetup for all tech enthusiasts in the area. Come and network with like-minded individuals, share your projects, and learn from others.</p>" +
      "<p>📅 Date: 12/15/2024</p>" +
      "<p>📍 Location: Tech Hub, Main Street</p>" +
      "<p>Don't miss out on this opportunity to connect and grow together!</p>",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: FeedItemType.Company,
  },
];
