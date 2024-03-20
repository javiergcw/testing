import 'package:flutter/material.dart';
import 'package:testing_camera_/webcamerawidget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Web HTML/JS Integration'),
        ),
        body: Center(
          child: WebCameraWidget(), // Tu widget que carga el HTML/JS
        ),
      ),
    );
  }
}



/* import 'package:ar_club_grow_flutter/blocs/publish/publish_bloc.dart';
import 'package:ar_club_grow_flutter/packages_out/countdown/cubit/countdown_cubit.dart';
import 'package:ar_club_grow_flutter/packages_out/ui/saved/pages/saved_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:ar_club_grow_flutter/style/style.dart' show theme;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (_) => PublishBloc(),
        ),
        BlocProvider(
          create: (_) => CountdownCubit(),
        ),
      ],
      child: MaterialApp(
        home: const SavedPage(),
        themeMode: ThemeMode.system,
        theme: theme,
      ),
    );
  }
}
 */