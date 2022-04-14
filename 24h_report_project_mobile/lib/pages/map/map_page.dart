///Testing with map
import 'package:crime_reported_project/utils/dimension.dart';
import 'package:flutter/material.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapPage extends StatefulWidget {
  const MapPage({Key? key}) : super(key: key);

  @override
  _MapPageState createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  late Position _currentPosition = Geolocator.getCurrentPosition() as Position;
  late String _currentAddress = "Finding...";
  static const _initialCameraPosition =
      CameraPosition(target: LatLng(10.773213, -122.232421), zoom: 11.5);
  late GoogleMapController _googleMapController;
  Marker _origin = Marker(markerId: const MarkerId('_origin'));

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
    Geolocator.getCurrentPosition().then((value) => _googleMapController
        .animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
            target: LatLng(value.latitude, value.longitude), zoom: 11.5))));
    _getCurrentLocation();
  }

  @override
  void dispose() {
    super.dispose();
    _googleMapController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: Text("Map"),
        actions: [
          if (_origin != null)
            TextButton(
              onPressed: () => _googleMapController
                  .animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
                target: _origin.position,
                zoom: 20,
                tilt: 50.0,
              ))),
              style: TextButton.styleFrom(
                primary: Colors.white,
                textStyle: const TextStyle(fontWeight: FontWeight.w600),
              ),
              child: Icon(Icons.home),
            ),
        ],
      ),
      body: Stack(
        alignment: Alignment.center,
        children: [
          Container(
            child: GoogleMap(
              myLocationButtonEnabled: true,
              zoomControlsEnabled: false,
              initialCameraPosition: _initialCameraPosition,
              onMapCreated: (controller) => _googleMapController = controller,
              markers: {
                if (_origin != null) _origin,
              },
              onTap: _addMarker,
            ),
          ),
          Container(
            alignment: Alignment.topCenter,
            child: SizedBox(
              height: Dimension.height20 * 3,
              child: Container(
                color: Colors.white,
                child: Padding(
                  padding:
                      const EdgeInsets.only(top: 5.0, left: 15.0, right: 15.0),
                  child: TextFormField(
                    controller: TextEditingController()
                      ..text = _currentAddress != null ? _currentAddress : "",
                    decoration: InputDecoration(
                      focusColor: Colors.white,
                      fillColor: Colors.white70,
                      focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue, width: 2.0),
                      ),
                    ),
                    maxLines: 1,
                    autofocus: false,
                    onChanged: (String location) {
                      getYourLocation(location);
                    },
                  ),
                ),
              ),
            ),
          ),
          Container(
            alignment: Alignment.bottomCenter,
            child: SizedBox(
              height: Dimension.height20 * 3,
              width: Dimension.width45 * 2,
              child: Container(
                color: Colors.white,
                child: Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: TextButton(
                      style: ButtonStyle(
                        backgroundColor:
                            MaterialStateProperty.all<Color>(Colors.blue),
                        foregroundColor:
                            MaterialStateProperty.all<Color>(Colors.white),
                      ),
                      onPressed: (_origin != null && _currentAddress != null)
                          ? () {
                              //
                            }
                          : null,
                      child: Text("Select"),
                    )),
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blueAccent,
        foregroundColor: Colors.black,
        onPressed: () async {
          _getCurrentLocation();
          print(_origin);
        },
        child: const Icon(Icons.center_focus_strong),
      ),
    );
  }

  void _addMarker(LatLng pos) {
    if (_origin == null || _origin.position != pos) {
      setState(() async {
        _origin = Marker(
            markerId: const MarkerId('_origin'),
            infoWindow: const InfoWindow(title: 'Your location'),
            icon: BitmapDescriptor.defaultMarkerWithHue(
                BitmapDescriptor.hueGreen),
            position: pos);
        //_destination = null;
        try {
          List<Placemark> placemarks =
              await placemarkFromCoordinates(pos.latitude, pos.longitude);
          Placemark place = placemarks[0];
          setState(() {
            _currentAddress =
                "${place.name},${place.subThoroughfare},${place.thoroughfare},${place.subAdministrativeArea},${place.administrativeArea}, ${place.country}";
          });
        } catch (e) {
          print(e);
        }
      });
    }
    // if (_destination == null) {
    //   setState(() {
    //     _destination = Marker(
    //         markerId: const MarkerId('_destination'),
    //         infoWindow: const InfoWindow(title: 'Store'),
    //         icon:
    //             BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueBlue),
    //         position: pos);
    //   });
    // }
  }

  _getCurrentLocation() async {
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

  getYourLocation(String location) {
    this._currentAddress = location;
  }
}
