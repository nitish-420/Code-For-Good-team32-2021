import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export const Post = () => (
    <div className="maincontainer">
    <div className="container-fluid">
  <Feed>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Sachita Malotra</a> posted
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <image src= '../../../public/comm1.jpg'/>
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='report' />1 Like
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    

    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Anagha Jain</a> posted
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
        Attended my first green campaign for Youngistan. Being part of a social cause has a different feeling to it. Thank you Youngistan

        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Nitish</a> posted
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Shubhayan</a> posted
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
        Having worked with you guys for so long, I have realized that the change that you want to see is very much within your capabilities. #50hrs

        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Saket Thota</a> posted 
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Extra text>
        My first blood donation camp :). Thank you youngistan fam.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Sachita Malhotra</a> posted
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/laura.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Gayatri Patil</a> posted 
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Extra text>
        Having worked with you guys for so long, I have realized that the change that you want to see is very much within your capabilities. #50hrs
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
          <i class="fas fa-ban">Report</i>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Saket Thota</a> posted 
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
        Attended my first green campaign for Youngistan. Being part of a social cause has a different feeling to it. Thank you Youngistan
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
          <i class="fas fa-ban">Report</i>

        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  </div>
  </div>
);