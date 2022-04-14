import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../utils/dimension.dart';

class IconAndTextWidget extends StatelessWidget {
  ///Add more in future
  final IconData icon;
  final String text;

  final Color iconColor;
  const IconAndTextWidget(
      {Key? key,
      required this.icon,
      required this.text,
      required this.iconColor})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(
          icon,
          color: iconColor,
          size: Dimension.iconSize24,
        ),
        const SizedBox(
          width: 5,
        ),
        Text(
          text,
          style: TextStyle(color: Colors.black),
        ),
      ],
    );
  }
}
