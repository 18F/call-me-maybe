To use:


![alt](/images/1.png)

1. Create a new Google Form.

![alt](/images/2.png)

2. Create a screener the same [set of questions](https://docs.google.com/document/d/14YwXV9BoY4EUEGc7kMITFQ-9tFjBipTaj7dsGFIJnNc/edit#) formerly approved for use in Ethnio.


![alt](/images/3.png)

3. Go into settings and uncheck the box requiring a GSA.gov account to view the form.

![alt](/images/4.png)

4. Click the preview button and copy the URL for your form. 

![alt](/images/5.png)

5. Paste that url in place of the `src` attribute of your `iframe`.

1. Reach out to someone with access to the target website's code and ask them to insert `jquery-2.1.4.min.js`, `js.cookie.js`, `call-me-maybe.js`, and call-me-maybe.css` into the page as well as the following code snippet (with your form).

```
  <aside class="call-me-maybe--screener">
    <a href="#" class="call-me-maybe--screener--close">
      <span class="call-me-maybe--screener--close--label">Close</span>
      <span class="call-me-maybe--screener--close--icon">&times;</span>
    </a>
    <iframe src="https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSe2On3HgblHB-hp7ZrnGpvmZEoa1_pGa8EolYhxQuBbmrtdOQ/viewform" width="640" height="420" frameborder="0" marginheight="0" marginwidth="0" scrolling="yes">Loading...</iframe>
    </div>
  </aside>
```