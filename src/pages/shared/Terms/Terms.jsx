import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur molestiae quia repellat! Temporibus qui dicta itaque quisquam at! Tenetur dicta tempore excepturi quasi quaerat quidem, maxime rerum! Voluptas quidem ducimus nostrum, ab vitae in deleniti, molestias natus quisquam sequi eos asperiores, fugiat laboriosam culpa a magni similique repudiandae autem numquam perferendis iusto necessitatibus odit nobis beatae? Cum incidunt similique ut sit, quas ea voluptates illo eaque, porro aut dolorem! Similique vero optio tenetur officiis ipsum iste itaque necessitatibus veritatis dolore. Iste molestias officiis voluptate omnis at perspiciatis fuga architecto alias quidem adipisci temporibus, voluptates tempore esse veritatis autem repellat.</p>
            <p>Go back <Link to="/register">register</Link> </p>
        </div>
    );
};

export default Terms;