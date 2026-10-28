function CommunityFeed() {
    const posts = [
        {
            id: 1,
            title: "¿Qué opinan de Blue Dream?",
            content: 
                "Quiero conocer las experiencias y opiniones de la comunidad sobre esta variedad.",
            author: "Usuario demo",
            strain: "Blue Dream",
            replies: 8,
        },
        {
            id: 2,
            title: "Comportamiento nuestras expreciencias",
            content:
                "¿Qué aspectos tienen en cuenta al comparar distintas variedades?",
            author: "GreenLeaf",
            strain: "Northern Lights",
            replies: 5,
        },
        {
            id: 3,
            title: "Nueva conversación en BudTalk",
            content:
                "Este será un espacio para conversar, compartir opiniones y aprender entre todos.",
            author: "Comunidad BudTalk",
            strain: "General",
            replies: 2,
        }
    ];

    return (
        <section className="community-section" id="comunidad">
            <p className="community-eyebrow">BUDTALK COMMUNITY</p>


            <h2>Conversaciones recientes</h2>

            <p className="community-description">
                Comparte opiniones y participa en las conversaciones 
                de nuestra comunidad.
            </p>

            <div className="post-list">
                {posts.map((post) => (
                    <article className="post-card" key={post.id}>
                        <span className="post-strain">{post.strain}</span>

                        <h3>{post.title}</h3>

                        <p>{post.content}</p>

                        <div className="post-footer">
                            <span>Por {post.author}</span>
                            <span>{post.replies} respuestas</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}


export default CommunityFeed;