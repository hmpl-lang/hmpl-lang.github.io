# Examples

<!--List of test examples of work without request to api. Will also work by itself.-->

## Main example

<div id="wrapper">
  <div>
    <button @click="switchComponent" class="getHTML">Get HTML!</button>
    <component :is="currentComponent"></component>
  </div>
</div>

### Source

```javascript
import { compile } from "hmpl-js";

const templateFn = compile(
  `<div>
    <button class="getHTML">Get HTML!</button>
    { 
      {
        "src":"/api/test",
        "after":"click:.getHTML",
        "repeat":false,
        "indicators": [
           {
             "trigger": "pending",
             "content": "<div>Loading...</div>"
           }
        ]
      } 
    }
  </div>`
);

const wrapper = document.getElementById("wrapper");

const elementObj = templateFn();

wrapper.appendChild(elementObj.response);
```

## Working with a table

```javascript
import { compile } from "hmpl-js";

const templateFn = compile(
  `<div>
<table>
  <caption>
    Test data
  </caption>
  <thead>
    <tr>
      <th scope="col">column1</th>
      <th scope="col">column2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2s</td>
    </tr>
  </tbody>
</table>

  <p>
    {
      {
        "src":"/api/register",
        "after":"submit:#form",
        "repeat":false,
        "indicators": [
          {
            "trigger": "pending",
            "content": "<p>Loading...</p>"
          }
        ]
      }
    }
  </p>
</div>`
);
const initFn = (ctx) => {
  const event = ctx.request.event;

  return {
    body: new FormData(event.target, event.submitter),
    credentials: "same-origin",
  };
};
const obj = templateFn(initFn);
const wrapper = document.getElementById("wrapper");
wrapper.appendChild(obj.response);
```

## Registration form

<div id="wrapper">
  <div>
    <div>
      <form @submit.prevent="switchComponent1" id="form">
        <div class="form-example">
          <label for="login">Login: </label>
          <input v-model="login" type="text" name="login" id="login" required /><br/>
          <label for="password">Password: </label>
          <input v-model="password" type="password" name="password" id="password" required />
        </div>
        <div class="form-example">
          <input type="submit" value="Register!" />
        </div>
      </form>
      <p><component :is="currentComponent1"></component></p>
    </div>
  </div>
</div>

### Source

```javascript
import { compile } from "hmpl-js";

const templateFn = compile(
  `<div>
  <form onsubmit="function prevent(e){e.preventDefault();};return prevent(event);" id="form">
    <div class="form-example">
      <label for="login">Login: </label>
      <input type="text" name="login" id="login" required /><br/>
      <label for="password">Password: </label>
      <input type="password" name="password" id="password" required />
    </div>
    <div class="form-example">
      <input type="submit" value="Register!" />
    </div>
  </form>
  <p>
    {
      {
        "src":"/api/register",
        "after":"submit:#form",
        "repeat":false,
        "indicators": [
          {
            "trigger": "pending",
            "content": "<p>Loading...</p>"
          }
        ]
      }
    }
  </p>
</div>`
);
const initFn = (ctx) => {
  const event = ctx.request.event;

  return {
    body: new FormData(event.target, event.submitter),
    credentials: "same-origin",
  };
};
const obj = templateFn(initFn);
const wrapper = document.getElementById("wrapper");
wrapper.appendChild(obj.response);
```

<script setup>
  import { createCommentVNode, h, ref } from 'vue'

  // Main example
  const els = [createCommentVNode("hmpl0"), h("div", "Loading..."), h("div", "HTML from server")];
  const Comment = (_, ctx) => els[0];
  const Loading = (_, ctx) => els[1];
  const HTMLFromServer = (_, ctx) => els[2];
  const currentComponent = ref(Comment)
  const switchComponent = () => {
      const isComment = currentComponent.value === Comment;
      if(isComment){
        currentComponent.value = Loading;
        setTimeout(()=>{
          currentComponent.value = HTMLFromServer;
        }, 300);
      }
    }
  // Registration form
  const login = ref("");
  const password = ref("");
  const els1 = [createCommentVNode("hmpl1"), h("div", "Loading...")];
  const Comment1 = (_, ctx) => els1[0];
  const Loading1 = (_, ctx) => els1[1];
  const currentComponent1 = ref(Comment1)
  const switchComponent1 = () => {
    const isComment = currentComponent1.value === Comment1;
    if(isComment){
      currentComponent1.value = Loading1;
      setTimeout(()=>{
        currentComponent1.value = h("span", `Hello, ${login.value}!`);
        login.value = "";
        password.value = "";
      }, 300);
    }
  }
</script>

## A repository of simple projects examples on hmpl

[Examples](https://github.com/hmpl-lang/examples)
