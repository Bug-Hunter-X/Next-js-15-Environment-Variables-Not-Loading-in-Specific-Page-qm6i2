```javascript
// pages/about.js
import {useRouter} from 'next/router';

export default function About() {
  const router = useRouter();
  //Check if the page is rendered on the client side
  if (typeof window !== 'undefined') {
    console.log(process.env.MY_VARIABLE);
  } else {
    console.log('Server Side Rendering');
  }
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```