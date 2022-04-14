import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../utils/colors.dart';
import '../utils/dimension.dart';
import 'big_text.dart';
import 'icon_and_text.dart';

class AppColumn extends StatelessWidget {
  ///Add more attribute in future...
  final String text;
  const AppColumn({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        BigText(
          text: text,
          size: Dimension.font26,
          color: Colors.white,
        ),
        SizedBox(
          height: Dimension.height15,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            IconAndTextWidget(
                icon: CupertinoIcons.hand_thumbsup,
                text: "123",
                iconColor: AppColors.mainColor),
            IconAndTextWidget(
                icon: Icons.comment,
                text: "234 Comments",
                iconColor: AppColors.mainColor),
            IconAndTextWidget(
                icon: CupertinoIcons.arrowshape_turn_up_left,
                text: "Share",
                iconColor: AppColors.iconColor2),
          ],
        )
      ],
    );
  }
}
