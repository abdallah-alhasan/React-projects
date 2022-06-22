export default function Landing(){
    return (
        <>
            <section className="landing">
                <img src="https://media-exp2.licdn.com/dms/image/C4E03AQFMdz9fRLnDlA/profile-displayphoto-shrink_800_800/0/1652448591124?e=1661385600&v=beta&t=Wfs8oj0KDhZqD_sGGJuxQ8ybgcj3acqojOU5e3ZbZ8c" alt="avatar" />
                <div>
                    <h2>Abdallah Al-hasan</h2>
                    <h4>Fullstack Developer</h4>
                </div>
                <div className="btns">
                    <button type="button" class="email"><i class="fa-solid fa-envelope"></i><a href="mailto:eng.abdallahalhasan@gmail.com"> Email </a></button>
                    <button type="button" class="linked"><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/abdallah-alhasan/"> LinkedIn </a></button>
                </div>
            </section>
        </>
    )
}