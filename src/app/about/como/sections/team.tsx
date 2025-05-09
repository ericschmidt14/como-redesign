"use client";
import { defaultPadding } from "@/app/style/style";
import { Button } from "@mantine/core";
import Image from "next/image";

export default function Team() {
  return (
    <section className={`flex flex-col gap-16 text-center ${defaultPadding}`}>
      <h2>Das Team</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
        {[...new Array(16)].map((a, index) => {
          return (
            <Image
              key={index}
              src="/user.svg"
              width={120}
              height={120}
              alt="User Image"
            />
          );
        })}
      </div>
      <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">
        <h5>Ihr Bild fehlt? Schicken Sie uns gerne Ihre Bewerbung!</h5>
        <Button component="a" href="mailto:jobs@como-solution.de">
          jobs@como-solution.de
        </Button>
      </div>
    </section>
  );
}
