import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../routes/routes_helper.dart';
import '../../utils/dimension.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with TickerProviderStateMixin {
  late Animation<double> animation;
  late AnimationController controller;
  Future<void> _loadResource() async {
    // await Get.find<PopularProductController>().getPopularProductList();
  }

  @override
  void initState() {
    super.initState();
    _loadResource();
    controller = new AnimationController(
        vsync: this, duration: const Duration(seconds: 2))
      ..forward();
    animation =
        new CurvedAnimation(parent: controller, curve: Curves.elasticOut);
    Timer(Duration(seconds: 3), () => Get.offNamed(RoutesHelper.getInitial()));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ScaleTransition(
            scale: animation,
            child: Center(
              child: Image.asset(
                "assets/image/sos.png",
                width: Dimension.splashImg,
              ),
            ),
          ),
          Center(
            child: Image.asset(
              "assets/image/slogan.png",
              width: Dimension.splashImg,
            ),
          ),
        ],
      ),
    );
  }
}
