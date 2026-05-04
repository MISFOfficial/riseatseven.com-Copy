import Image from "next/image";

function Partner() {
  const partners = [
    { name: "Pinterest", src: "/rise_files/pinterest.png" },
    { name: "Google", src: "/rise_files/gogle.png" },
    { name: "Gemini", src: "/rise_files/gemini.png" },
    { name: "Giphy", src: "/rise_files/giphy.png" },
    { name: "ChatGPT", src: "/rise_files/chat-gpt.png" },
    { name: "Amazon", src: "/rise_files/amazon.png" },
    { name: "Reddit", src: "/rise_files/reddit.png" },
    { name: "YouTube", src: "/rise_files/youtube.png" },
    { name: "TikTok", src: "/rise_files/tiktok.png" },
  ];

  return (
    <div className="w-full hidden justify-center relative overflow-hidden z-0 mt-12 gap-x-14 | 2xl:flex">
      {partners.map((partner) => (
        <div key={partner.name} className="w-16 aspect-20/9 relative">
          <Image
            src={partner.src}
            alt={`${partner.name} logo`}
            fill
            className="w-full h-full object-contain object-center absolute inset-0"
          />
        </div>
      ))}
    </div>
  );
}

export default Partner;
