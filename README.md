Domplate
========

JavaScript Template Library originally used in Mozilla Firebug.

  * Client-side compile using `eval()`
  * Optional server-side compile to execute on client without `eval()`


Example
=======

    var DOMPLATE = require("domplate", "domplate");
    var rep = DOMPLATE.domplate({
        tag: DOMPLATE.tags.DIV({"style": "color: red;"},"$object|capitalize"),
        capitalize: function(str) {
            return str.toUpperCase();
        }
    });
    var html = rep.tag.render({
        object: "Hello World"
    });

    // html == <div style="color: red;" class=" ">HELLO WORLD</div>


Links
=====

  * [http://www.softwareishard.com/blog/category/domplate/](http://www.softwareishard.com/blog/category/domplate/)
  * [http://code.google.com/p/domplate/](http://code.google.com/p/domplate/)
  * [http://www.christophdorn.com/Blog/category/domplate/](http://www.christophdorn.com/Blog/category/domplate/)


License
=======

[New BSD License](http://www.opensource.org/licenses/bsd-license.php)

Copyright (c) 2007, Parakey Inc.
All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Parakey Inc. nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission of Parakey Inc.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
