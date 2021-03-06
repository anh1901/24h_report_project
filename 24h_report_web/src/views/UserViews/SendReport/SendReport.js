import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Col,
  Input,
  Form,
  Button,
  FormText,
} from "reactstrap";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "quill/dist/quill.snow.css";
//react-select
import makeAnimated from "react-select/animated";
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import reportApi from "../../../api/reportApi";
import {DatetimePickerTrigger} from 'rc-datetime-picker';
import * as moment from 'moment';


const animatedComponents = makeAnimated();
//testing
//multiple select option mock data

const SendReport = (props) => {
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const { history } = props;
  const [text, setText] = useState("Viết ở đây");
  const [address, setAddress] = useState("");
  const [isChecked, setIsCheck] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  
  const [time, setTime] = useState(moment());
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(true);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  // Text box
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], 
      ["link"],
      ["image"],
      ["video"],// remove formatting button
    ],
  };
  const shortcuts = {
    'Today': moment(),
    'Yesterday': moment().subtract(1, 'days'),
    'Clear': ''
  };
  const handleEditor=(editor)=>{
    console.log('background', editor);
    setText(editor);
  }
  const handle_submit = async () => {
    try {
      const userID=localStorage.getItem('user_info');
      const params = {
        userID: isAnonymous?null:(userID!==null ? JSON.parse(userID):null),
        location:
          address +
          ", " +
          state.selectedCity.label +
          ", " +
          state.selectedDistrict.label +
          ", " +
          state.selectedWard.label,
        timeFraud: time,
        description: text,
        video: "not yet",
        image: "not yet",
        isAnonymous: isAnonymous,
      };
      console.log(params);
      const response = await reportApi.send(params);
      console.log(response);
      if (!JSON.stringify(response).includes("error")) {
        alert("Gửi thành công");
        history.push("/viewReport");
      } else {
        alert("Gửi thất bại");
      }
    } catch (e) {
      alert(e.message);
    }
  };
  const handleMoment=(moment) => {
    setTime(moment);
  }
  const handleCheck = (event) => {
    setIsCheck(event.target.checked);
  };
  const handleAnonymous = (event) => {
    setIsAnonymous(event.target.checked);
  };
  const handle_address = (event) => {
    setAddress(event.target.value);
  };
  useEffect(() => {
    // fetchCategoryList();
  }, []);
  return (
    <Card
      className="mt-2 ml-2 mr-2 pt-2 pr-2 pl-2 pb-2"
      style={{ height: "auto" }}
    >
      <CardHeader>
        <b>
         Chi tiết báo cáo{" "}
        </b>
        
      </CardHeader>
      <CardBody>
        <FormGroup row>
          <Col md="1">
            <Label>Vị trí:</Label>
          </Col>
          <Col md="8">
            <div className="row pl-3">
              <Input
                className="mr-5 input-lg col-md-3"
                type="text"
                id="address"
                value={address}
                onChange={handle_address}
                placeholder="Vị trí vụ việc..."
              />
              <Select
                className="pr-5 "
                name="cityId"
                isDisabled={cityOptions.length === 0}
                options={cityOptions}
                onChange={(option) => onCitySelect(option)}
                placeholder="Tỉnh/Thành"
                defaultValue={selectedCity}
              />

              <Select
                className="pr-5"
                name="districtId"
                isDisabled={districtOptions.length === 0}
                options={districtOptions}
                onChange={(option) => onDistrictSelect(option)}
                placeholder="Quận/Huyện"
                defaultValue={selectedDistrict}
              />
              <Select
                className="pr-5"
                name="wardId"
                isDisabled={wardOptions.length === 0}
                options={wardOptions}
                placeholder="Phường/Xã"
                onChange={(option) => onWardSelect(option)}
                defaultValue={selectedWard}
              />
            </div>
          </Col>
        </FormGroup>
        {/* date time picker */}
        <FormGroup row>
          <Col md="1">
            <Label for="file">Thời điểm:</Label>
          </Col>
          <Col md="2">
            {/* <DatePicker showClearButton={false} maxDate={new Date().toISOString()} id="example-datepicker" value = {value} onChange= {(v,f) =>handleChange(v, f)} /> */}
            <DatetimePickerTrigger
              shortcuts={shortcuts} 
              moment={time}
              onChange={handleMoment}
              maxDate={moment()}
              >
              <input className="pt-1 pb-1" type="text" value={time.format('YYYY-MM-DD HH:mm')} readOnly/>
              <i className="icon-calendar p-2 ml-2 border"/>
            </DatetimePickerTrigger>
            <FormText>
            Lưu ý:{" "}
            <i>Thời điểm xảy ra vụ việc</i>
          </FormText>
          </Col>
          <Col md="2">
          {/* <TimePicker
            onChange={setTime}
            value={time}
            maxTime={new Date()}
            required={true}
            style={{color: 'white'}}
          /> */}
          </Col>
        
        </FormGroup>
        {/* File Upload */}
        <FormGroup row>
          <Col md="1">
            <Label for="file">File đính kèm</Label>
          </Col>
          <Col>
            <Input id="file" name="file" type="file" />
            <FormText>
              Lưu ý:{" "}
              <i>Dung lượng hình ảnh không quá 5MB, video không quá 50MB</i>
            </FormText>
          </Col>
        </FormGroup>
        {/* Detail */}
        <FormGroup>
          <ReactQuill
            value={text}
            onChange={handleEditor}
            modules={modules}
            style={{
              height: "20rem",
              marginBottom:
                window.innerWidth < 505
                  ? "7rem"
                  : 505 < window.innerWidth && window.innerWidth < 650
                  ? "6rem"
                  : 650 < window.innerWidth && window.innerWidth < 1250
                  ? "4rem"
                  : "2rem",
            }}
          />
        </FormGroup>
        {/* Chấp nhập điều khoản && ẩn danh */}
        {user_info!==null&& <FormGroup check inline style={{ paddingTop: "2rem" }}>
          <Input
            type="checkbox"
            value={isAnonymous}
            onChange={handleAnonymous}
          />
          <Label check>
            <i style={{ color: "red" }}>* </i>
            Tôi muốn gửi ẩn danh
          </Label>
        </FormGroup>}
        <br />
        <FormGroup
          check
          inline
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          <Input type="checkbox" value={isChecked} onChange={handleCheck} />
          <Label check>
            <i style={{ color: "red" }}>* </i>
            Tôi hoàn toàn chịu trách nhiệm về thông tin báo báo theo{" "}
            <a href="#" style={{ color: "#2F80ED"}}>điều khoản sử dụng</a>
          </Label>
        </FormGroup>
        {isChecked === true ? (
          <FormGroup inline>
            <Button style={{ background: "linear-gradient(to right,#56CCF2,#2F80ED)", color: "white"}} onClick={() => handle_submit()}>
              <b>Gửi báo cáo</b>
            </Button>
          </FormGroup>
        ) : (
          <FormGroup inline>
            <Button style={{ background: "linear-gradient(to right,#56CCF2,#2F80ED)", color: "white"}} disabled>
              <b>Gửi báo cáo</b>
            </Button>
          </FormGroup>
        )}
      </CardBody>
    </Card>
  );
};

export default SendReport;
