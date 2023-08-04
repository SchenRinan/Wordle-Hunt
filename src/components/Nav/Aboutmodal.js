const Aboutmodal = () => {
    return (
        <div className="modal fade" id="about" tabIndex="-1" aria-labelledby="howToLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">About Duckle</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
    {/* Carousel */}
                    <div id="carouselHowto" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselHowto" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselHowto" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselHowto" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="10000">
                            <h2 className="text-center">What is Duckle</h2>
                            <br/>
                            <p>Duckle is a simple game where you type the word on screen to score points.</p>
                            <br/>
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <h2 className="text-center">Inspiration</h2>
                            <br/>
                            <p>The game has heavy influence to the games <b>Duck Hunt</b> and <b>Wordle</b>. The Developers also have kids who could use the game to practice their typing skills. The Deutsch part is because of a little German background.</p>
                            <br/>
                          </div>
                          <div className="carousel-item">
                            <h2 className="text-center">What's next</h2>
                            <br/>
                            <p>The game will have a sister which is the same inspired but will lean heavier on the Wordle side.</p>
                            <br/>
                          </div>
                        </div>
                    </div>
    {/* End of Carousel */}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>
    );
}
 
export default Aboutmodal;