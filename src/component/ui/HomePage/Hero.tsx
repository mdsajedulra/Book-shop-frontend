import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="text-center py-16 bg-base-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Book Shop 📚</h1>
            <p className="text-lg mb-6">Your favorite place to discover and share books.</p>
            <Link to="/all-products">
                <button className="btn btn-primary">Browse Books</button>
            </Link>
        </section>
    )
}

export default Hero