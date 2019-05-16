import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div className="container">
          <Header/>
          <article>
            <Link to='/beers'>
              <img src="http://static.wixstatic.com/media/92fb46_cb0a8d45215a4a619ec969f7fd9259f2.jpg" alt="beer-poster"></img>
            </Link>
            <h3>All beers</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam nihil praesentium? Error doloremque atque, aliquid enim voluptatem aliquam ex accusantium. Error placeat praesentium deleniti tenetur, necessitatibus aut quidem fugit.
            Ullam officiis eos tempora assumenda quod maxime ipsum consequatur iusto. Blanditiis explicabo, magni tempore molestiae, veniam rerum tempora, accusamus porro animi inventore sapiente? Corrupti quod veritatis tempore inventore maxime voluptates.
            Autem, impedit exercitationem, voluptas, at nemo excepturi possimus expedita obcaecati facilis et minima adipisci cumque sed accusantium quam aliquam sequi enim maiores dolorum reprehenderit quidem dolor sint est qui! Totam.
            Velit ipsa perspiciatis quos aliquid quo quae eveniet veritatis rerum voluptatibus laboriosam sunt repudiandae inventore, deleniti nemo mollitia error blanditiis vero neque ad dolore! Voluptate quisquam assumenda consequatur fugiat dolorum?
            Voluptatibus veniam veritatis cumque fugiat cum earum, voluptatem quidem laborum, obcaecati hic harum fuga sapiente? Magnam accusantium eligendi nihil asperiores inventore autem, placeat eos neque illum iste alias doloribus similique.</p>
          </article>
        
          <article>
            <Link to='/random-beer'>
              <img src="https://i.pinimg.com/originals/c8/a2/d7/c8a2d701dbeb28d0a7bab89a76d5a78f.jpg" alt="beer-poster"></img>
            </Link>
            <h3>Random beer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam nihil praesentium? Error doloremque atque, aliquid enim voluptatem aliquam ex accusantium. Error placeat praesentium deleniti tenetur, necessitatibus aut quidem fugit.
            Ullam officiis eos tempora assumenda quod maxime ipsum consequatur iusto. Blanditiis explicabo, magni tempore molestiae, veniam rerum tempora, accusamus porro animi inventore sapiente? Corrupti quod veritatis tempore inventore maxime voluptates.
            Autem, impedit exercitationem, voluptas, at nemo excepturi possimus expedita obcaecati facilis et minima adipisci cumque sed accusantium quam aliquam sequi enim maiores dolorum reprehenderit quidem dolor sint est qui! Totam.
            Velit ipsa perspiciatis quos aliquid quo quae eveniet veritatis rerum voluptatibus laboriosam sunt repudiandae inventore, deleniti nemo mollitia error blanditiis vero neque ad dolore! Voluptate quisquam assumenda consequatur fugiat dolorum?
            Voluptatibus veniam veritatis cumque fugiat cum earum, voluptatem quidem laborum, obcaecati hic harum fuga sapiente? Magnam accusantium eligendi nihil asperiores inventore autem, placeat eos neque illum iste alias doloribus similique.</p>
          </article>
        
          <article>
            <Link to='/new-beer'>
              <img src="https://imgc.allpostersimages.com/img/print/poster/beer-helping-white-guys-dance-funny-retro-poster_a-G-8837487-0.jpg" alt="beer-poster"></img>
            </Link>
            <h3>New beer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam nihil praesentium? Error doloremque atque, aliquid enim voluptatem aliquam ex accusantium. Error placeat praesentium deleniti tenetur, necessitatibus aut quidem fugit.
            Ullam officiis eos tempora assumenda quod maxime ipsum consequatur iusto. Blanditiis explicabo, magni tempore molestiae, veniam rerum tempora, accusamus porro animi inventore sapiente? Corrupti quod veritatis tempore inventore maxime voluptates.
            Autem, impedit exercitationem, voluptas, at nemo excepturi possimus expedita obcaecati facilis et minima adipisci cumque sed accusantium quam aliquam sequi enim maiores dolorum reprehenderit quidem dolor sint est qui! Totam.
            Velit ipsa perspiciatis quos aliquid quo quae eveniet veritatis rerum voluptatibus laboriosam sunt repudiandae inventore, deleniti nemo mollitia error blanditiis vero neque ad dolore! Voluptate quisquam assumenda consequatur fugiat dolorum?
            Voluptatibus veniam veritatis cumque fugiat cum earum, voluptatem quidem laborum, obcaecati hic harum fuga sapiente? Magnam accusantium eligendi nihil asperiores inventore autem, placeat eos neque illum iste alias doloribus similique.</p>
          </article>
      </div>
    )
  }
}

export default Home;
