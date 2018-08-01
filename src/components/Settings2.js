import ListErrors from './ListErrors';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
    };
  }

  componentWillMount() {
    if (this.props.userStore.currentUser) {
      Object.assign(this.state, {
        image: this.props.userStore.currentUser.image || '',
        username: this.props.userStore.currentUser.username,
        bio: this.props.userStore.currentUser.bio || '',
        email: this.props.userStore.currentUser.email
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>

          <div ui-view="" className="view-frame" ng-hide="loadingShow">
              <style>
                  .emailInput {margin - right: 20px;}
                  .rtl .emailInput {margin - left:20px; margin-right: 0px;}

                  #profileForm select {width:282px;}

                  .mobile #account-content .sibs > label {margin - bottom:4px !important;}
                  #profileForm select.mobile {width:100%;}


              </style>
              <div id="main-detail" className="account-page desktop">
                  <div id="account-content">
                      <div style="border-bottom: 1px solid #aaaaaa;">
                          <h2 className="account-header sg-f-dspl-m">
                              Edit Account Information </h2>
                      </div>
                      <div id="profile" className="shadow-inputbox">
                          <h3 className="sg-f-ttl">Profile</h3>
                          <form name="profileForm" id="profileForm"
                                action="/account/edit/vendorPortal/1?v=1533121424085" method="POST"
                                className="ng-pristine ng-valid">
                              <input value="23b7350934910f2efee698549c46e03563907c7c" name="stk" type="hidden">
                                  <div className="row">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_emailAddress" className="required">Account Email <span
                                              className="required">*</span></label></div>
                                      <div className="sibs emailInput">
                                          <input style="background: #FFF" name="email" id="current_email"
                                                 value="olejek8@yandex.ru" disabled="disabled" type="text">
                                      </div>
                                      <div className="sibs">
                                          <input name="UserEx[updateEmail]" id="updateEmail"
                                                 style="margin: 0; display: inline-block; vertical-align: middle;"
                                                 type="checkbox">
                                              <label htmlFor="updateEmail" style="vertical-align: middle;">Update
                                                  Email</label>
                                      </div>
                                  </div>
                                  <div id="updateEmailRow" className="row" style="display:none;">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_emailAddress">New Email Address</label>
                                      </div>
                                      <div className="sibs">
                                          <input value="" name="UserEx[emailAddress]" id="UserEx_emailAddress"
                                                 required="required" type="text"></div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_firstName" className="required">First Name <span
                                              className="required">*</span></label></div>
                                      <div className="sibs">
                                          <input aria-required="true" required="required" maxLength="100"
                                                 name="UserEx[firstName]" id="UserEx_firstName" value="olejek8"
                                                 type="text"></div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_lastName">Last Name</label></div>
                                      <div className="sibs">
                                          <input aria-required="true" required="required" maxLength="50"
                                                 name="UserEx[lastName]" id="UserEx_lastName" type="text"></div>
                                  </div>


                                  <div className="row" style="">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_languageId">Preferred Language</label></div>
                                      <div className="sibs">
                                          <select name="UserEx[languageId]" className="language_select desktop">
                                              <option value="1" selected="">English</option>
                                              <option value="2">Español</option>
                                          </select>
                                      </div>
                                  </div>

                                  <div className="row" style="">
                                      <label htmlFor="UserEx_birthDate">Birth Date</label> <select
                                      className="js-month-dropdown" name="month" style="margin-right:2px;width:118px;">
                                      <option value="1">January</option>
                                      <option value="2">February</option>
                                      <option value="3">March</option>
                                      <option value="4">April</option>
                                      <option value="5">May</option>
                                      <option value="6">June</option>
                                      <option value="7">July</option>
                                      <option value="8">August</option>
                                      <option value="9">September</option>
                                      <option value="10">October</option>
                                      <option value="11">November</option>
                                      <option value="12">December</option>
                                  </select>

                                      <select className="js-day-dropdown" name="day"
                                              style="margin-right:2px;width:68px;">
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6</option>
                                          <option value="7">7</option>
                                          <option value="8">8</option>
                                          <option value="9">9</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                          <option value="13">13</option>
                                          <option value="14">14</option>
                                          <option value="15">15</option>
                                          <option value="16">16</option>
                                          <option value="17">17</option>
                                          <option value="18">18</option>
                                          <option value="19">19</option>
                                          <option value="20">20</option>
                                          <option value="21">21</option>
                                          <option value="22">22</option>
                                          <option value="23">23</option>
                                          <option value="24">24</option>
                                          <option value="25">25</option>
                                          <option value="26">26</option>
                                          <option value="27">27</option>
                                          <option value="28">28</option>
                                          <option value="29">29</option>
                                          <option value="30">30</option>
                                          <option value="31">31</option>
                                      </select>

                                      <select className="js-year-dropdown" name="year" style="width:85px;">
                                          <option value="1918">1918</option>
                                          <option value="1919">1919</option>
                                          <option value="1920">1920</option>
                                          <option value="1921">1921</option>
                                          <option value="1922">1922</option>
                                          <option value="1923">1923</option>
                                          <option value="1924">1924</option>
                                          <option value="1925">1925</option>
                                          <option value="1926">1926</option>
                                          <option value="1927">1927</option>
                                          <option value="1928">1928</option>
                                          <option value="1929">1929</option>
                                          <option value="1930">1930</option>
                                          <option value="1931">1931</option>
                                          <option value="1932">1932</option>
                                          <option value="1933">1933</option>
                                          <option value="1934">1934</option>
                                          <option value="1935">1935</option>
                                          <option value="1936">1936</option>
                                          <option value="1937">1937</option>
                                          <option value="1938">1938</option>
                                          <option value="1939">1939</option>
                                          <option value="1940">1940</option>
                                          <option value="1941">1941</option>
                                          <option value="1942">1942</option>
                                          <option value="1943">1943</option>
                                          <option value="1944">1944</option>
                                          <option value="1945">1945</option>
                                          <option value="1946">1946</option>
                                          <option value="1947">1947</option>
                                          <option value="1948">1948</option>
                                          <option value="1949">1949</option>
                                          <option value="1950">1950</option>
                                          <option value="1951">1951</option>
                                          <option value="1952">1952</option>
                                          <option value="1953">1953</option>
                                          <option value="1954">1954</option>
                                          <option value="1955">1955</option>
                                          <option value="1956">1956</option>
                                          <option value="1957">1957</option>
                                          <option value="1958">1958</option>
                                          <option value="1959">1959</option>
                                          <option value="1960">1960</option>
                                          <option value="1961">1961</option>
                                          <option value="1962">1962</option>
                                          <option value="1963">1963</option>
                                          <option value="1964">1964</option>
                                          <option value="1965">1965</option>
                                          <option value="1966">1966</option>
                                          <option value="1967">1967</option>
                                          <option value="1968">1968</option>
                                          <option value="1969">1969</option>
                                          <option value="1970">1970</option>
                                          <option value="1971">1971</option>
                                          <option value="1972">1972</option>
                                          <option value="1973">1973</option>
                                          <option value="1974">1974</option>
                                          <option value="1975">1975</option>
                                          <option value="1976">1976</option>
                                          <option value="1977">1977</option>
                                          <option value="1978">1978</option>
                                          <option value="1979">1979</option>
                                          <option value="1980">1980</option>
                                          <option value="1981">1981</option>
                                          <option value="1982">1982</option>
                                          <option value="1983">1983</option>
                                          <option value="1984">1984</option>
                                          <option value="1985">1985</option>
                                          <option value="1986">1986</option>
                                          <option value="1987">1987</option>
                                          <option value="1988">1988</option>
                                          <option value="1989">1989</option>
                                          <option value="1990">1990</option>
                                          <option value="1991">1991</option>
                                          <option value="1992">1992</option>
                                          <option value="1993">1993</option>
                                          <option value="1994">1994</option>
                                          <option value="1995">1995</option>
                                          <option value="1996">1996</option>
                                          <option value="1997">1997</option>
                                          <option value="1998">1998</option>
                                          <option value="1999">1999</option>
                                          <option value="2000">2000</option>
                                          <option value="2001">2001</option>
                                          <option value="2002">2002</option>
                                          <option value="2003">2003</option>
                                          <option value="2004">2004</option>
                                          <option value="2005">2005</option>
                                          <option value="2006">2006</option>
                                          <option value="2007">2007</option>
                                          <option value="2008">2008</option>
                                          <option value="2009">2009</option>
                                          <option value="2010">2010</option>
                                          <option value="2011">2011</option>
                                          <option value="2012">2012</option>
                                          <option value="2013">2013</option>
                                          <option value="2014">2014</option>
                                          <option value="2015">2015</option>
                                          <option value="2016">2016</option>
                                          <option value="2017">2017</option>
                                          <option value="2018">2018</option>
                                          <option value="2019">2019</option>
                                          <option value="2020">2020</option>
                                          <option value="2021">2021</option>
                                          <option value="2022">2022</option>
                                          <option value="2023">2023</option>
                                          <option value="2024">2024</option>
                                          <option value="2025">2025</option>
                                          <option value="2026">2026</option>
                                          <option value="2027">2027</option>
                                          <option value="2028">2028</option>
                                          <option value="2029">2029</option>
                                          <option value="2030">2030</option>
                                          <option value="2031">2031</option>
                                          <option value="2032">2032</option>
                                          <option value="2033">2033</option>
                                      </select>
                                  </div>
                                  <script>
                                      $(document).ready(function(){
                                      $('.js-month-dropdown, .js-year-dropdown').change(function () {
                                          getDayDropDown($(this));
                                      });
                                  });
                                  </script>

                                  <div className="row" style="">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_city">Location</label></div>
                                      <div className="sibs">
                                          <input id="UserEx_city" name="UserEx[city]" type="text"></div>
                                  </div>

                                  <div className="row" style="">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_countryId">Country</label></div>
                                      <div className="sibs">
                                          <select name="UserEx[countryId]" className="country_select desktop"
                                                  style="display:block;">
                                              <option value=""></option>
                                              <option value="13">Argentina</option>
                                              <option value="15">Aruba</option>
                                              <option value="16">Australia</option>
                                              <option value="17">Austria</option>
                                              <option value="19">Bahamas</option>
                                              <option value="20">Bahrain</option>
                                              <option value="24">Belgium</option>
                                              <option value="29">Bolivia</option>
                                              <option value="30">Bosnia and Herzegovina</option>
                                              <option value="31">Botswana</option>
                                              <option value="33">Brazil</option>
                                              <option value="36">Bulgaria</option>
                                              <option value="2">Canada</option>
                                              <option value="45">Chile</option>
                                              <option value="46">China</option>
                                              <option value="49">Colombia</option>
                                              <option value="53">Costa Rica</option>
                                              <option value="55">Croatia</option>
                                              <option value="58">Czech Republic</option>
                                              <option value="60">Denmark</option>
                                              <option value="63">Dominican Republic</option>
                                              <option value="65">Ecuador</option>
                                              <option value="66">Egypt</option>
                                              <option value="67">El Salvador</option>
                                              <option value="70">Estonia</option>
                                              <option value="76">Finland</option>
                                              <option value="77">France</option>
                                              <option value="85">Germany</option>
                                              <option value="89">Greece</option>
                                              <option value="94">Guatemala</option>
                                              <option value="100">Honduras</option>
                                              <option value="101">Hong Kong</option>
                                              <option value="102">Hungary</option>
                                              <option value="104">India</option>
                                              <option value="105">Indonesia</option>
                                              <option value="108">Ireland</option>
                                              <option value="109">Israel</option>
                                              <option value="110">Italy</option>
                                              <option value="111">Jamaica</option>
                                              <option value="112">Japan</option>
                                              <option value="113">Jordan</option>
                                              <option value="115">Kenya</option>
                                              <option value="119">Kuwait</option>
                                              <option value="122">Latvia</option>
                                              <option value="123">Lebanon</option>
                                              <option value="128">Lithuania</option>
                                              <option value="129">Luxembourg</option>
                                              <option value="131">Macedonia</option>
                                              <option value="134">Malaysia</option>
                                              <option value="141">Mauritius</option>
                                              <option value="143">Mexico</option>
                                              <option value="244">Montenegro</option>
                                              <option value="148">Morocco</option>
                                              <option value="153">Nepal</option>
                                              <option value="154">Netherlands</option>
                                              <option value="157">New Zealand</option>
                                              <option value="158">Nicaragua</option>
                                              <option value="160">Nigeria</option>
                                              <option value="164">Norway</option>
                                              <option value="165">Oman</option>
                                              <option value="169">Panama</option>
                                              <option value="171">Paraguay</option>
                                              <option value="172">Peru</option>
                                              <option value="173">Philippines</option>
                                              <option value="175">Poland</option>
                                              <option value="176">Portugal</option>
                                              <option value="177">Puerto Rico</option>
                                              <option value="178">Qatar</option>
                                              <option value="180">Romania</option>
                                              <option value="181" selected="">Russia</option>
                                              <option value="192">Saudi Arabia</option>
                                              <option value="194">Serbia</option>
                                              <option value="195">Seychelles</option>
                                              <option value="197">Singapore</option>
                                              <option value="198">Slovakia</option>
                                              <option value="199">Slovenia</option>
                                              <option value="202">South Africa</option>
                                              <option value="118">South Korea</option>
                                              <option value="203">Spain</option>
                                              <option value="209">Sweden</option>
                                              <option value="210">Switzerland</option>
                                              <option value="212">Taiwan</option>
                                              <option value="214">Tanzania</option>
                                              <option value="215">Thailand</option>
                                              <option value="222">Turkey</option>
                                              <option value="228">United Arab Emirates</option>
                                              <option value="229">United Kingdom</option>
                                              <option value="1">United States</option>
                                              <option value="231">Uruguay</option>
                                              <option value="236">Vietnam</option>
                                              <option value="242">Zambia</option>
                                          </select>
                                      </div>
                                  </div>

                                  <div className="row" style="">
                                      <div className="sibs">
                                          <label htmlFor="UserEx_cellPhoneNumber">Phone Number</label></div>
                                      <div className="sibs">
                                          <input className="pretifyPhone" aria-required="true" required="required"
                                                 maxLength="20" name="UserEx[cellPhoneNumber]"
                                                 id="UserEx_cellPhoneNumber" type="text"></div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label></label>
                                      </div>
                                      <div className="sibs">
                                          <div id="changeProfile" className="medium primaryButton button"
                                               style="width: 282px;" tabIndex="0">
                                              <div className="title-container"><p className="title">Save Changes</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <input name="profileForm" value="" type="hidden">
                          </form>
                      </div>

                      <div id="emailPreference" className="row" style="">
                          <h3 className="sg-f-ttl">Email Preference</h3>
                          <form name="preferenceForm" id="preferenceForm"
                                action="/account/edit/vendorPortal/1?v=1533121424085" method="POST"
                                className="ng-pristine ng-valid">
                              <input value="23b7350934910f2efee698549c46e03563907c7c" name="stk" type="hidden">
                                  <div className="row">
                                      <div className="sibs"
                                           style="text-align: center; display: inline-block; margin: 0; width: 160px;">
                                          <input id="emailOptedIn" name="emailOptedIn" value="1" checked="checked"
                                                 type="checkbox">
                                      </div>
                                      <div className="sibs" style="display: inline-block;width:280px;">
                                          <label style="font-weight:500; color:#888; width:100%;"
                                                 htmlFor="emailOptedIn">
                                              Please keep me updated with new experiences<br>and items that I might
                                              enjoy from IfOnly </label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label></label>
                                      </div>
                                      <div className="sibs">
                                          <div id="changeEmail" name="changeEmail"
                                               className="medium primaryButton button" style="width: 282px;"
                                               tabIndex="0">
                                              <div className="title-container"><p className="title">Update</p></div>
                                          </div>
                                      </div>
                                      <input value="" name="preferenceForm" type="hidden"></div>
                          </form>
                      </div>


                      <div id="changePassword" className="shadow-pwdbox row">
                          <h3 className="sg-f-ttl">Password</h3>
                          <form name="passwordForm" id="passwordForm"
                                action="/account/edit/vendorPortal/1?v=1533121424085" method="POST"
                                className="ng-pristine ng-valid">
                              <input value="23b7350934910f2efee698549c46e03563907c7c" name="stk" type="hidden">
                                  <div className="row" style="margin-bottom:0px;">
                                      <div className="sibs">
                                          <label htmlFor="currentPassword">Current Password:</label>
                                      </div>
                                      <div className="sibs">
                                          <input aria-required="true" autoComplete="off" required="required" value=""
                                                 name="currentPassword" id="currentPassword" type="password">
                                              <div className="swapper" style="float:right;">
                                              </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label style="margin:0px;">&nbsp;</label>
                                      </div>
                                      <div className="sibs input_container">
                                          <div className="swapper" style="float:right;">
                                              <a href="#" id="forgot-password" className="fo-13-n-s3">Forgot
                                                  Password?</a>
                                          </div>
                                          <div style="clear:both;">
                                              <p id="login_error" className="sg-c-error"
                                                 style="padding-top:5px;display:none;"></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label htmlFor="password">New Password:</label>
                                      </div>
                                      <div className="sibs">
                                          <input aria-required="true" autoComplete="off" required="required" value=""
                                                 name="password" id="password" type="password"></div>
                                  </div>
                                  <div className="row" style="margin-top:27px;">
                                      <div className="sibs">
                                          <label htmlFor="password2">Retype New Password:</label>
                                      </div>
                                      <div className="sibs">
                                          <input aria-required="true" autoComplete="off" required="required" value=""
                                                 name="password2" id="password2" type="password"></div>
                                  </div>
                                  <div className="row">
                                      <div className="sibs">
                                          <label></label>
                                      </div>
                                      <div className="sibs">
                                          <div id="changePwd" name="changePwd" className="medium primaryButton button"
                                               style="width: 282px;" tabIndex="0">
                                              <div className="title-container"><p className="title">Save Changes</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <input value="" name="passwordForm" type="hidden"></form>
                      </div>
                  </div>
              </div>


              <style type="text/css">
                  div.row {margin - bottom: 10px;}
                  span.err{color: #D8000C;}
              </style>


              <script type="text/javascript">
                var vendorPortal = true;

                var accountLanguage = $('#main-detail .
              language_select
              ');
                console.log('test');
                console.log(accountLanguage);

                $(document).ready(function (){
                  $("#changeProfile").click(function () {
                      var firstname = '';
                      var lastname = '';
                      var phonenumber = '';
                      var country = '';
                      var re = '';
                      var hasError = false;
                      var emailAddress = '';
                      var scrollToEle = '';

                      $("#profile div.row span").remove('.err');

                      var firstNameregex = '(^[A-Za-z \'-]+$)';
                      re = new RegExp(firstNameregex);
                      firstname = $("#UserEx_firstName").val();
                      var specialCharReg = /[!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?0-9]+/;
                      if (firstname === '') {
                          $(".information").hide();
                          var span = '<span class="err">' + "First Name cannot be blank" + '</span>';
                          $('#UserEx_firstName').parent().append(span);
                          hasError = true;
                          scrollToEle = $("#UserEx_firstName");
                      }
                      else if (specialCharReg.test(firstname) && firstname != 'olejek8') {
                          $(".information").hide();
                          var span = '<span class="err">' + "First Name can not contain special characters and numbers" + '</span>';
                          $('#UserEx_firstName').parent().append(span);
                          hasError = true;
                          scrollToEle = $("#UserEx_firstName");
                      }


                      var lastnameregex = '(^[A-Za-z \'-]+$)';
                      re = new RegExp(lastnameregex);
                      lastname = $("#UserEx_lastName").val();
                      if (lastname === '' && false) {
                          $(".information").hide();
                          var span = '<span class="err">' + "Last Name cannot be blank" + '</span>';
                          $('#UserEx_lastName').parent().append(span);
                          hasError = true;
                          scrollToEle = $("#UserEx_lastName");
                      }
                      else if (specialCharReg.test(lastname)) {
                          $(".information").hide();
                          var span = '<span class="err">' + "Last Name can not contain special characters and numbers" + '</span>';
                          $('#UserEx_lastName').parent().append(span);
                          hasError = true;
                          scrollToEle = $("#UserEx_lastName");
                      }

                      country = $(".country_select").val();
                      if (country === '' && $(".country_select").is(':visible')) {
                          $(".information").hide();
                          var span = '<span class="err">' + "Country cannot be blank" + '</span>';
                          $('.country_select').parent().append(span);
                          hasError = true;
                          scrollToEle = $(".country_select");
                      }

                      var phoneregex = '^[0-9- .\(\)]{10,15}$';
                      re = new RegExp(phoneregex);
                      phonenumber = $("#UserEx_cellPhoneNumber").val();
                      if ($("#UserEx_cellPhoneNumber").is(':visible')) {
                          if (phonenumber === '' || g_siteId === 5) {
                              // don't check
                          } else if (!re.test(phonenumber)) {
                              $(".information").hide();
                              var span = '<span class="err">' + "Invalid Phone Number" + '</span>';
                              $('#UserEx_cellPhoneNumber').parent().append(span);
                              hasError = true;
                              scrollToEle = $("#UserEx_cellPhoneNumber");
                          }
                      }

                      var needUpdate = $("#updateEmail").prop("checked");

                      if (needUpdate) {
                          re = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
                          emailAddress = $("#UserEx_emailAddress").val();
                          if (emailAddress === '') {
                              var span = '<span class="err">' + "Email address cannot be empty" + '</span>';
                              $('#UserEx_emailAddress').parent().append(span);
                              hasError = true;
                              scrollToEle = $("#UserEx_emailAddress");
                          } else if (!re.test(emailAddress)) {
                              $(".information").hide();
                              var span = '<span class="err">' + "Invalid email address" + '</span>';
                              $('#UserEx_emailAddress').parent().append(span);
                              hasError = true;
                              scrollToEle = $("#UserEx_emailAddress");
                          } else {
                              $.ajax({
                                  type: "POST",
                                  url: '/account/existEmail',
                                  data: {emailAddress: emailAddress, siteId: 1},
                                  dataType: "json",
                                  async: false,
                                  success: function (data) {
                                      if (data.result === 1) {

                                      } else {
                                          var span = '<span class="err">' + "This email is already being used" + '</span>';
                                          $('#UserEx_emailAddress').parent().append(span);
                                          hasError = true;
                                      }
                                  }
                              });

                          }
                      }

                      if (!hasError) {
                          $.ajax({
                              type: "POST",
                              url: "/account/edit",
                              data: $("#profileForm").serialize(),
                              dataType: "json",
                              success: function (data) {
                                  if (data.result === 1) {
                                      if ($('#updateEmail').is(':checked')) {
                                          $('#updateEmail').click();
                                          $('#current_email').val($('#UserEx_emailAddress').val());
                                          $('#UserEx_emailAddress').val('');
                                      }
                                      location.reload();
                                  } else {
                                      alertEx(data.msg);
                                  }
                              }
                          });
                          return false;
                      } else {
                          if (scrollToEle !== '') {
                              $('html, body').animate({
                                  scrollTop: scrollToEle.offset().top - 150
                              });
                          }
                      }

                      return !hasError;
                  });

                  $("#changePwd").click(function(){
                  if ($('input[name = "currentPassword"]').val().trim() === '') {
                  alertEx("Current password cannot be empty, please enter and try again");
                  return false;
              }

                  var password = $('input[name = "password"]').val().trim();

                  if(password !== $('input[name = "password2"]').val().trim()){
                  alertEx("Password and re-entered password do not match");
                  return false;
              }

                  $.ajax({
                  type: "POST",
                  url: "/account/edit",
                  data: $("#passwordForm").serialize(),
                  dataType: "json",
                  success: function(data){
                  if(data.result === 1){
                  alertEx("Your new password has been changed.");
                  ngState.go(ngState.current, {}, {reload: true}); // refresh page
              } else {
                  alertEx(data.msg);
              }
              }
              });

              });

                  $("#forgot-password").click(function(){
                  var inputEmail = "olejek8@yandex.ru";

                  $.post( '/website/ForgotPassword',
              {'email':inputEmail},
                  function(data){
                  if(data.result === 1){
                  if (! g_forceLogin) {
                  userAccessHide();
              }
                  alertEx(data.msg, "Thank You");
                  $("#alert-dialog").css('z-index', '10002'); // Jun: need to figure out why z-index become 9999
              } else if(data.result !== 1){
                  displayError("#login_error", data.msg);
              }
              }, 'json');
                  return false;
              });

                  $("#updateEmail").click(function(){
                  var neeedUpdate = $("#updateEmail").prop('checked');
                  if(neeedUpdate){
                  $("#updateEmailRow").show();
                  $("#UserEx_emailAddress").focus();
              }else{
                  $("#updateEmailRow").hide();
              }
              });

                  $("#changeEmail").click(function(){
                  $.ajax({
                  type: "POST",
                  url: "/account/edit",
                  data: $("#preferenceForm").serialize(),
                  dataType: "json",
                  success: function(data){
                  if(data.result === 1){
                  $("#password").val('');
                  $("#password2").val('');
                  alertEx("Your email preference has been changed.");
              } else {
                  alertEx(data.msg);
              }
              }
              });
              });
              })
              ;
              </script>
          </div>


        <fieldset>

          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.updateState('image')}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateState('username')}
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.updateState('bio')}
            >
            </textarea>
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateState('email')}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              value={this.state.password}
              onChange={this.updateState('password')}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.props.userStore.updatingUser}
          >
            Update Settings
          </button>

        </fieldset>
      </form>
    );
  }
}

@inject('userStore', 'authStore')
@withRouter
@observer
class Settings extends React.Component {

  handleClickLogout = () =>
    this.props.authStore.logout()
      .then(() => this.props.history.replace('/'));

  render() {

    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">

              <h1 className="text-xs-center">Your Settings</h1>

              <ListErrors errors={this.props.userStore.updatingUserErrors} />

              <SettingsForm
                currentUser={this.props.userStore.currentUser}
                onSubmitForm={user => this.props.userStore.updateUser(user)} />

              <hr />

              <button
                className="btn btn-outline-danger"
                onClick={this.handleClickLogout}
              >
                Or click here to logout.
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
