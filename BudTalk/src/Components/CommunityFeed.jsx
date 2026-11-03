import { useEffect, useState } from "react";

const initialPosts = [
    {
        id: 1,
        title: "¿Que opinan de Blue Dream?",
        content:
            "Quiero conocer las experiecias y opiniones de la comunidad sobre esta variedad.",
        author: "Usuario demo",
        strain: "Blue Dream",
        replies: 8,
    },
    {
        id: 2,
        title: "Compartamos nuestras experiencias",
        content:
            "¿Qué aspectos tienen en cuenta al comprar distintas variedades?",
        author: "Usuario demo",
        strain: "Northern Lights",
        replies: 5,
    },
    {
        id: 3, 
        title: "Nueva Conversación en BudTalk",
        content:
            "Este sera un espacio para conversar, compartir opiniones y aprender entre todos.",
        author : "Comunidad BudTalk",
        strain: "General",
        replies: 2,
    },
];

function CommunityFeed() {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("budtalk-posts");

        if (!savedPosts) {
            return initialPosts;
        }
        
        try {
            const parsedPosts = JSON.parse(savedPosts);

            return Array.isArray(parsedPosts) 
                ? parsedPosts 
                : initialPosts;
        } catch {
            return initialPosts;
        }
    });

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [strain, setStrain] = useState("General");
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "budtalk-posts",
            JSON.stringify(posts)
        );
    }, [posts]);

    function handleSubmit(event){
        event.preventDefault();

        const cleanTitle = title.trim();
        const cleanContent = content.trim();

        if (!cleanTitle || !cleanContent) {
            return;
        }

        if (editingPostId !== null) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === editingPostId
          ? {
              ...post,
              title: cleanTitle,
              content: cleanContent,
              strain: strain,
            }
          : post
      )
    );
     } else {
        const newPost = {
            id: Date.now(),
            title: cleanTitle,
            content: cleanContent,
            author: "Tú",
            strain: strain,
            replies: 0,
        };

        setPosts((currentPosts) => [newPost, ...currentPosts]);
        }

        setTitle("");
        setContent("");
        setStrain("General")
        setEditingPostId(null);

    }

    function handleEdit(post) {
        setTitle(post.title);
        setContent(post.content);
        setStrain(post.strain);
        setEditingPostId(post.id);
    }

    function handleDelete(postId) {
        const confirmed = window.confirm(
            "¿Seguro que deseas eliminar esta publicación?"
        );

        if (!confirmed) {
            return;
        }
        
        setPosts((currentPosts) => 
        currentPosts.filter((post) => post.id !== postId)
        );
    }

    function handleCancelEdit() {
        setTitle("");
        setContent("");
        setStrain("General");
        setEditingPostId(null);
    }

    return (
        <section className="community-section" id="comunidad">
            <p className="community-eyebrow">BUDTALK COMMUNITY</p>


            <h2>Conversaciones recientes</h2>

            <p className="community-description">
                Comparte opiniones y participa en las conversaciones 
                de nuestra comunidad.
            </p>

            <p className="post-count">
                {posts.length}{" "}
                {posts.length === 1 ? "publicació" : "publicaciones"} en la comunidad
            </p>

            <form className="post-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Título de tu publicación"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    maxLength={100}
                    required
                />
                
                <select
                    value={strain}
                    onChange={(event) => setStrain(event.target.value)}
                >
                    <option value="General">General</option>
                    <option value="Blue Dream">Blue Dream</option>
                    <option value="Northern Lights">Northern Lights</option>
                    <option value="Pineapple Express">Pineapple Express</option>
                    <option value="OG Kush">OG Kush</option>
                    <option value="White Widow">White Widow</option>
                    <option value="Gorilla Glue #4">Gorilla Glue #4</option>
                    <option value="Purple Haze">Purple Haze</option>
                    <option value="Gelato">Gelato</option>
                    <option value="Amnesia Haze">Amnesia Haze</option>
                </select>

                <textarea 
                    placeholder="¿Qué quieres compartir con la comunidad?"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    rows={4}
                    maxLength={1000}
                    required
                />

                <button type="submit">
                    {editingPostId !== null ? "Guardar cambios" : "Publicar"}
                </button>

                {editingPostId !== null && (
                    <button
                        type="button"
                        onClick={handleCancelEdit}
                    >
                        Cancelar edición
                    </button>
                )}
            </form>

            <div className="post-list">
                {posts.map((post) => (
                    <article className="post-card" key={post.id}>
                        <span className="post-strain">{post.strain}</span>

                        <h3>{post.title}</h3>

                        <p>{post.content}</p>

                        <div className="post-footer">
                            <span>Por {post.author}</span>
                            <span>{post.replies} respuestas</span>
                            <button 
                                type="button"
                                onClick={() => handleDelete(post.id)}
                                >
                                Eliminar
                            </button>
                            <button
                                type="button"
                                onClick={() => handleEdit(post)}
                            >
                                Editar
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}


export default CommunityFeed;