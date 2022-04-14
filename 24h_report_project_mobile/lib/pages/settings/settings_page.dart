import 'package:crime_reported_project/utils/dimension.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:settings_ui/settings_ui.dart';

import '../../main.dart';

class SettingPage extends StatefulWidget {
  const SettingPage({Key? key}) : super(key: key);

  @override
  State<SettingPage> createState() => _SettingPageState();
}

class _SettingPageState extends State<SettingPage> {
  late bool _isLightMode;
  @override
  void initState() {
    super.initState();
    _getTheme();
  }

  _getTheme() {
    setState(() {
      _isLightMode = MyApp.themeNotifier.value == ThemeMode.light;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
      ),
      body: Container(
        padding: EdgeInsets.only(top: Dimension.height10),
        child: SettingsList(
          sections: [
            SettingsSection(
              title: 'Common',
              tiles: [
                const SettingsTile(
                  leading: Icon(Icons.language),
                  title: 'Language',
                  subtitle: 'English',
                ),
                SettingsTile.switchTile(
                  onToggle: (value) {
                    MyApp.themeNotifier.value =
                        _isLightMode ? ThemeMode.dark : ThemeMode.light;
                    _getTheme();
                  },
                  switchValue: _isLightMode,
                  leading: const Icon(Icons.format_paint),
                  title: _isLightMode ? 'Light Mode' : 'Dark Mode',
                ),
              ],
            ),
            SettingsSection(title: 'Account', tiles: const [
              SettingsTile(
                leading: Icon(Icons.phone),
                title: 'Phone number',
              ),
              SettingsTile(
                leading: Icon(Icons.perm_identity),
                title: 'ID number',
              ),
              SettingsTile(
                leading: Icon(CupertinoIcons.rectangle_paperclip),
                title: 'View your reports',
              ),
            ]),
            SettingsSection(title: 'Others', tiles: const [
              SettingsTile(
                leading: Icon(Icons.family_restroom),
                title: 'Family numbers',
              ),
              SettingsTile(
                leading: Icon(Icons.app_registration),
                title: 'About us',
              ),
              SettingsTile(
                leading: Icon(Icons.volunteer_activism),
                title: 'Donate',
              ),
              SettingsTile(
                leading: Icon(Icons.logout),
                title: 'Sign out',
              ),
            ]),
          ],
        ),
      ),
    );
  }
}
