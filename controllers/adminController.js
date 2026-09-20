/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

const adminController = {
  index: async (req, res) => {
    const data = [
      {
        author: "Michael Torres",
        function: "Created User",
        date: "20 Sep 2026",
        action: "View"
      },
      {
        author: "Angela Flores",
        function: "Updated Profile",
        date: "19 Sep 2026",
        action: "View"
      },
      {
        author: "Daniel Ramos",
        function: "Added Product",
        date: "18 Sep 2026",
        action: "View"
      },
      {
        author: "Bea Navarro",
        function: "Updated Product",
        date: "17 Sep 2026",
        action: "View"
      },
      {
        author: "Carlo Garcia",
        function: "Deleted Product",
        date: "16 Sep 2026",
        action: "View"
      },
      {
        author: "Nicole Reyes",
        function: "Created Order",
        date: "15 Sep 2026",
        action: "View"
      },
      {
        author: "Joshua Cruz",
        function: "Updated Order",
        date: "14 Sep 2026",
        action: "View"
      },
      {
        author: "Samantha Lopez",
        function: "Added Customer",
        date: "13 Sep 2026",
        action: "View"
      },
      {
        author: "Kevin Mendoza",
        function: "Updated Customer",
        date: "12 Sep 2026",
        action: "View"
      },
      {
        author: "Rachel Santos",
        function: "Generated Report",
        date: "11 Sep 2026",
        action: "View"
      }
    ];

    res.render("dashboard", {
      title: "Admin Dashboard",
      data: data
    });
  },
};

export { adminController };