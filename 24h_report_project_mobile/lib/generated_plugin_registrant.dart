//
// Generated file. Do not edit.
//

// ignore_for_file: directives_ordering
// ignore_for_file: lines_longer_than_80_chars

import 'package:geolocator_web/geolocator_web.dart';
import 'package:google_maps_flutter_web/google_maps_flutter_web.dart';
import 'package:location_web/location_web.dart';
import 'package:shared_preferences_web/shared_preferences_web.dart';

import 'package:flutter_web_plugins/flutter_web_plugins.dart';

// ignore: public_member_api_docs
void registerPlugins(Registrar registrar) {
  GeolocatorPlugin.registerWith(registrar);
  GoogleMapsPlugin.registerWith(registrar);
  LocationWebPlugin.registerWith(registrar);
  SharedPreferencesPlugin.registerWith(registrar);
  registrar.registerMessageHandler();
}
