import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/header";
import Footer from "./layout/footer";
import MainPage from "./layout/mainpage";
import SliderList from "./components/admin/sliderlist";
import AdminHeader from "./components/admin/adminheader";
import AdminFooter from "./components/admin/adminfooter";
import AddEditReview from "./components/admin/addeditreview";
import ReviewList from "./components/admin/reviewlist";
import AddEditMenu from "./components/admin/addeditmenu";
import AddEditSlider from "./components/admin/addeditslider";
import ListMenu from "./components/admin/listmenu";
import ListSlider from "./components/admin/listslider";
import Gallery from "./components/admin/gallerylist";
import TestPage from "./components/testpage";
import PageMenu from "./components/pagemenu";
import PageAbout from "./components/pageblog";
import PageReservation from "./components/pagereservation";
import PageStuff from "./components/pagestuff";
import PageGallery from "./components/pagegallery";
import PageBlog from "./components/pageblog";
import PageBlogDetail from "./components/pageblogdetail";
import PageContact from "./components/pagecontact";

function App() {
  let pathName = window.location.pathname;
  let adminhideheaderpath = pathName.includes("admin");
  return (
    <Router>
      {adminhideheaderpath ? <AdminHeader /> : <Header />}
      <div className="wrapper">
        <Switch>
          <Route path="/admin/editreview/:id" component={AddEditReview} />
          <Route path="/admin/editmenu/:id" component={AddEditMenu} />
          <Route path="/admin/editslider/:id" component={AddEditSlider} />
          <Route path="/admin/addreview" component={AddEditReview} />
          <Route path="/admin/addslider" component={AddEditSlider} />
          <Route path="/admin/addmenu" component={AddEditMenu} />
          <Route path="/admin/listreview" component={ReviewList} />
          <Route path="/admin/listmenu" component={ListMenu} />
          <Route path="/admin/listslider" component={ListSlider} />
          <Route path="/admin/listgallery" component={Gallery} />
          <Route path="/admin/" component={ListSlider} />
          <Route path="/test/" component={TestPage} />
          <Route path="/menu/" component={PageMenu} />
          <Route path="/about/" component={PageAbout} />
          <Route path="/reservation/" component={PageReservation} />
          <Route path="/stuff/" component={PageStuff} />
          <Route path="/gallery/" component={PageGallery} />
          <Route path="/blog/" component={PageBlog} />
          <Route path="/blogdetail/" component={PageBlogDetail} />
          <Route path="/contact/" component={PageContact} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
      {adminhideheaderpath ? <AdminFooter /> : <Footer />}
    </Router>
  );
}

export default App;
