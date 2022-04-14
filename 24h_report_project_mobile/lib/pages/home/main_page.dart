import 'dart:async';

import 'package:crime_reported_project/pages/home/components/posts_list.dart';
import 'package:crime_reported_project/pages/home/components/whats_new.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:marquee/marquee.dart';

import '../../routes/routes_helper.dart';
import '../../utils/colors.dart';
import '../../utils/dimension.dart';
import 'components/hashtags.dart';
import 'components/trendings.dart';

class MainPage extends StatefulWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  late DateTime _dateTime;
  late String _currentTime;
  late Marker _origin;
  late bool serviceEnabled;
  late LocationPermission permission;
  late GoogleMapController _googleMapController;

  _getDateTime() {
    setState(() {
      _dateTime = DateTime.now();
      _currentTime = _dateTime.hour.toString() +
          ":" +
          _dateTime.minute.toString() +
          ":" +
          _dateTime.second.toString();
    });
  }

  // final Geolocator geolocator = Geolocator()..forceAndroidLocationManager;
  late Position _currentPosition;
  String _currentAddress = "Finding your location";

  _getCurrentLocation() async {
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      return Future.error('Location services are disabled.');
    }
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        // Permissions are denied, next time you could try
        // requesting permissions again (this is also where
        // Android's shouldShowRequestPermissionRationale
        // returned true. According to Android guidelines
        // your App should show an explanatory UI now.
        return Future.error('Location permissions are denied');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      // Permissions are denied forever, handle appropriately.
      return Future.error(
          'Location permissions are permanently denied, we cannot request permissions.');
    }
    await Geolocator.getCurrentPosition().then((value) => {
          setState(() {
            _currentPosition = value;
            _getAddressFromLatLng();
          }),
          _googleMapController.animateCamera(CameraUpdate.newCameraPosition(
              CameraPosition(
                  target: LatLng(value.latitude, value.longitude), zoom: 20.5)))
        });
    setState(() {
      _origin = Marker(
        markerId: const MarkerId('_origin'),
        infoWindow: const InfoWindow(title: 'Your location'),
        icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueGreen),
        position: LatLng(_currentPosition.latitude, _currentPosition.longitude),
      );
      //_destination = null;
    });
    print(_currentPosition);
  }

  _getAddressFromLatLng() async {
    try {
      List<Placemark> placemarks = await placemarkFromCoordinates(
          _currentPosition.latitude, _currentPosition.longitude);
      Placemark place = placemarks[0];
      setState(() {
        _currentAddress =
            "${place.name},${place.subThoroughfare},${place.thoroughfare},${place.subAdministrativeArea},${place.administrativeArea}, ${place.country}";
      });
      print(_currentAddress);
    } catch (e) {
      print(e);
    }
  }

  @override
  void initState() {
    _getDateTime();
    super.initState();
    _getCurrentLocation();
    Timer.periodic(Duration(seconds: 1), (_) => _getDateTime());
  }

  @override
  Widget build(BuildContext context) {
    // var product = ProductModel();
    // Get.find<PopularProductController>()
    //     .initProduct(product, Get.find<CartController>());
    // print("Height:" + MediaQuery.of(context).size.height.toString());
    return Scaffold(
      body: Column(
        children: [
          //header
          Container(
            margin: EdgeInsets.only(
                top: Dimension.height45, bottom: Dimension.height15),
            padding: EdgeInsets.only(
                left: Dimension.width20, right: Dimension.width20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      _currentTime,
                      style: TextStyle(color: AppColors.mainColor),
                    ),
                    Row(
                      children: [
                        Container(
                          height: 40,
                          width: Dimension.width45 * 6,
                          child: Marquee(
                            text: (_currentAddress == null)
                                ? "Finding your location"
                                : " " + _currentAddress,
                          ),
                        ),
                        SizedBox(
                          width: Dimension.width10,
                        ),
                        (_currentAddress != null)
                            ? GestureDetector(
                                onTap: () {
                                  Get.toNamed(RoutesHelper.getMapPage());
                                },
                                child: Icon(
                                  Icons.place,
                                  color: Colors.pinkAccent,
                                  size: Dimension.iconSize24,
                                ),
                              )
                            : Container(),
                      ],
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Center(
                      child: Container(
                        width: Dimension.width45,
                        height: Dimension.height45,
                        child: Icon(
                          Icons.search,
                          color: Colors.white,
                          size: Dimension.iconSize24,
                        ),
                        decoration: BoxDecoration(
                          borderRadius:
                              BorderRadius.circular(Dimension.radius15),
                          color: AppColors.mainColor,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          //body
          Expanded(
            child: SingleChildScrollView(
              child: Container(
                width: Dimension.screenWidth,
                padding: EdgeInsets.only(
                    left: Dimension.width10, right: Dimension.width10),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: EdgeInsets.all(Dimension.width10 / 2),
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'Trendings',
                        style: TextStyle(
                            fontSize: Dimension.font16,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                    TrendingsComponent(),
                    Container(
                      padding: EdgeInsets.all(Dimension.width10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text(
                            'Hashtags Nổi bật',
                            style: TextStyle(
                                fontSize: Dimension.font16,
                                fontWeight: FontWeight.bold),
                          ),
                          Text(
                            'More >',
                            style: TextStyle(
                                color: AppColors.mainColor,
                                decoration: TextDecoration.underline),
                          ),
                        ],
                      ),
                    ),
                    HashTagsComponent(),
                    Container(
                      padding: EdgeInsets.all(Dimension.width10),
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'What\'s New?',
                        style: TextStyle(
                            fontSize: Dimension.font16,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                    WhatsNewComponent(),
                    PostsListComponent(),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
