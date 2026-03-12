const SocialSection = () => {
  return (
    <section className="social-section py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">Redes Sociais</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Character image */}
          <div className="flex-shrink-0">
            <img
              src="src/assets/social-media-img.png"
              alt="Personagem DDTank"
              className="h-64 md:h-96 w-auto animate-float"
            />
          </div>

          {/* Instagram embed area */}
          <div className="flex-1 max-w-lg w-full">
            <div className="card-game p-2 rounded-lg">
              <iframe
                src="https://www.instagram.com/ddtankbr3.6/embed/"
                className="w-full border-0 rounded-lg"
                height="500"
                allowTransparency={true}
                loading="lazy"
                title="Instagram DDTank Brasil 3.6"
              />
            </div>

            {/* Instagram icon link */}
            <div className="flex justify-center mt-6">
              <a
                href="https://www.instagram.com/ddtankbr3.6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-glow"
              >
                <img
                  src="https://play.ddtank36.com.br/Orange/images/social-media-icons/instagram-icon.png?v=1737077038&theme=Brasil36"
                  alt="Instagram"
                  className="h-12 w-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
