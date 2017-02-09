# Call Me Maybe

## Getting started

![alt](/images/1.png)

First, create a new Google Form.

![alt](/images/2.png)

Second, create a screener using the same [set of questions](https://docs.google.com/document/d/14YwXV9BoY4EUEGc7kMITFQ-9tFjBipTaj7dsGFIJnNc/edit#) formerly approved for use in Ethnio.

![alt](/images/3.png)

Third, go into "settings" (the gear icon) and *uncheck* the box requiring a GSA.gov account to view the form.

![alt](/images/4.png)

Fourth, click preview (the eye icon) and copy the URL for your form.

![alt](/images/5.png)

Fifth, paste that url in place of the `src` attribute of your `iframe` (see the code, below).

Sixth, reach out to someone with access to the target website's code and ask them to insert `jquery-2.1.4.min.js`, `js.cookie.js`, `call-me-maybe.js`, and `call-me-maybe.css` into the page as well as the following code snippet (with your form).

```
  <aside class="call-me-maybe--screener">
    <a href="#" class="call-me-maybe--screener--close">
      <span class="call-me-maybe--screener--close--label">Close</span>
      <span class="call-me-maybe--screener--close--icon">&times;</span>
    </a>
    <iframe src="[YOUR URL]" width="640" height="420" frameborder="0" marginheight="0" marginwidth="0" scrolling="yes">Loading...</iframe>
    </div>
  </aside>
```

Optionally, you can also embed a "remote" that will allow people to show the `iframe` on demand. The code for that is:

```
<a class="call-me-maybe--remote" href="#">Got a minute? Help us improve this site.</a>
```